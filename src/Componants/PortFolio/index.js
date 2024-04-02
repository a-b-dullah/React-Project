import { Link } from "react-router-dom";
import "./Styls.css"
import { useEffect, useState } from "react";
export default function PortFolio(){
function Toggle(img){
// Create Element
let Portfolio=document.querySelector(".Portfolio")
let div=document.createElement("div");
let box=document.createElement("div");
let img2 =document.createElement("img")
//  ********************
 // Get ClassName for Element
 div.classList.add("Box2");
 Portfolio.appendChild(div)
//  document.body.style.backgroundColor:"#eee"





}
const [data,setdata]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:8000/portfolio`)
        .then(res=>res.json())
        .then(data=>setdata(data))
    })
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
