import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../../assets/firebase';
import { useCarritoContext } from '../../context/CarritoContex'
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';


const Checkout = () => {
    const initialValues={nombreCompleto: "", email: "", validateEmail: "", DNI: "", celular: "", direccion: ""}
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);    
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    //Realizo un check antes de completar el formulario por si no hay stock, por mas comodidad para el usuario
    const checkCarritoVacio = [...carrito]
    checkCarritoVacio.forEach(prodCarrito => {
        getProducto(prodCarrito.id).then(prodBDD => {
            if(prodBDD.stock < prodCarrito.cant) {
                toast.error(`El producto ${prodBDD.nombreAMostrar} no tiene stock, le devolvimos al inicio para que siga comprando`);                    
                emptyCart();
                navigate("/")                          
            }
        })            
    })
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            consultarFormulario();
        }
      }, [formErrors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValues.email!==formValues.validateEmail){
            toast.error("Es importante que el campo Email y Repetir Email sean iguales")
        }else{        
            consultarFormulario();
            e.target.reset()
        }
    };

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }



    // aux.forEach((prodCarrito) => {
    //     getProducto(prodCarrito.id).then(prodBDD => {
    //         if(prodBDD.stock >= prodCarrito.cant) {
    //             prodBDD.stock -= prodCarrito.cant
    //             updateProducto(prodCarrito.id, prodBDD)                    
    //         } else {
    //             toast.error(`El producto ${prodBDD.nombreAMostrar} no tiene stock`);                    
    //             emptyCart();
    //             navigate("/")                      
    //         }
    //     })            
    // })


    const consultarFormulario = async () => {
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        console.log("cliente:",cliente)
        delete cliente["validateEmail"];
        const order = await createOrdenCompra(cliente,totalPrice(), new Date().toISOString())
        const item =  await getOrdenCompra(order.id)
        toast.success(`¡Gracias por comprar en Sharky Games! su orden de compra es ${item.id}`)
        emptyCart()       
        setFormValues(initialValues)   
        navigate("/")
    }

    return (
        <div className="container checkoutForm">
            <form onSubmit={handleSubmit} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombreCompleto" required  value={formValues.nombreCompleto} onChange={handleChange}/>
                    <p className='colorMensajeCheckout'>{formErrors.nombreCompleto}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" required value={formValues.email} onChange={handleChange}/>
                    <p className='colorMensajeCheckout'>{formErrors.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="text" className="form-control" name="validateEmail" required value={formValues.validateEmail} onChange={handleChange}/>
                    <p className='colorMensajeCheckout'>{formErrors.validateEmail}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="DNI" required value={formValues.DNI} onChange={handleChange}/>
                    <p className='colorMensajeCheckout'>{formErrors.DNI}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Celular</label>
                    <input type="number" className="form-control" name="celular" required value={formValues.celular} onChange={handleChange}/>
                    <p className='colorMensajeCheckout'>{formErrors.celular}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required  value={formValues.direccion} onChange={handleChange}/>
                    <p className='colorMensajeCheckout'>{formErrors.direccion}</p>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;