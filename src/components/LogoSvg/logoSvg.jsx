const LogoSvg = () => {
    return (
        <button className="navbar-brand logo" href="#"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pacman" width={100} height={100} viewBox="0 0 24 24" strokeWidth={1} stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981z" />
                <circle cx="11.5" cy="7.5" r={1} fill="currentColor" /> </svg>
        </button>
        );
}

export default LogoSvg;