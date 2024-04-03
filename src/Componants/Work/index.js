import { useState } from "react"
import "./style.css"
import axios from "axios";

export default  function Work(){
const [state,setstate]=useState([]);
axios.get("Js/db.json")
.then(res=>setstate(res.data.works)
,[]
)
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
