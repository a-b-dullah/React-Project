import { Link } from "react-router-dom";

export default function NavBar(){
return(
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid ">
<Link className="navbar-brand fs-2 fw-bold" to="/">Ultra Profile</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<div className="navbar-nav ms-auto text-center">
<Link className="nav-link fs-5 active " aria-current="page" to="/">Home</Link>
<Link className="nav-link fs-5" to="/Work">Work</Link>
<Link className="nav-link fs-5" to="/Profile">Profile</Link>
<Link className="nav-link fs-5" to="/SocailMedia">SocailMedia</Link>
<Link className="nav-link fs-5" to="/Drop">Drop</Link>
<Link className="nav-link fs-5" to="/About">About</Link>
{/* <Link className="nav-link fs-5" to="/Contact">Contact</Link> */}
</div>
</div>
</div>
</nav>
</div>
)
}
