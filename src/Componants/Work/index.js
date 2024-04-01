import { useEffect, useState } from "react"
import "./style.css"

export default  function Work(){
const [state,setstate]=useState([]);
useEffect(()=>{
fetch(`http://localhost:8000/works`)
.then(res=>res.json())
.then(data=>setstate(data));


})
return(
<div className="Work mt-4 p-4">
    <h2 className="fs-1 text-center">My Work</h2>
<div className="container">
<div className="row">
{state.map((Card)=>{
return(
    <div key={Card.id} className="card col col-lg-3 me-lg-3 ms-lg-auto col-12 col-md-6 p-3  mt-4 text-center">

<i className={Card.icon_name }></i>
<h3 >{Card.title}</h3>
<p className="text-body-tertiary mt-5">{Card.body}</p>


</div>
)
})}

</div>
</div>
</div>
)
}
