import { Link } from "react-router-dom";
import "./Styls.css"
import {  useState } from "react";
import axios from "axios";
export default function PortFolio(){
function Toggle(img){
}
const [data,setdata]=useState([])
axios.get("Js/db.json")
.then(res=>setdata(res.data.portfolio)
,[])
return(
<div className="Portfolio p-3  " style={{backgroundColor:"#eee"}}>
    <h2 className="fs-2 fw-bold text-center">My Portfolio</h2>
    <nav className="navbar navbar-expand-lg b ms-auto">
<div className="container-fluid">
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse " id="navbarNav">
<ul className="navbar-nav ms-auto me-auto mt-3 ">
<li className="nav-item me-2 ps-4 pe-3">
    <Link to={"/"} className="nav-link active text-black "aria-current="page" >All</Link>
</li>
<li className="nav-item me-2">
    <Link to={"/"} className="nav-link text-black" >Html</Link>
</li>
<li className="nav-item me-2">
    <Link to={"/"} className="nav-link text-black ">Photoshop</Link>
</li>
<li className="nav-item me-2">
    <Link to={"/"} className="nav-link text-black" >Wordpress</Link>
</li>
<li className="nav-item me-2">
    <Link to={"/"} className="nav-link  text-black" >Mobile</Link>
</li>
</ul>
</div>
</div>
</nav>
<div className="mt-3 Imgs">
{data.map((imgs)=>{
    return(
<div className="box  " key={imgs.id}> 
    <img  src={imgs.image}  alt=""/>
    <p>
        <button onClick={()=>Toggle(imgs.image)} className="p-2">Show Image</button>
    </p>
</div>
)
})}
</div>



    

</div>

)
}
