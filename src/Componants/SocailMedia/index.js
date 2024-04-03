import { useState } from "react"
import "./Styls.css"
import axios from "axios"

export default  function SocailMedia(){
const [state,setstate]=useState([])
axios.get("Js/db.json")
.then(res=>setstate(res.data.social))


return(
<div>
<div className="row w-100">
    {state.map((Socail)=>{
        return(
<div key={Socail.id} className="col boxes col-lg-4  ">
<div className="d-flex justify-content-center">
<i className={Socail.icon}></i>
<div className="text-white fs-6 fw-bold">
<h6 className="m-0 ">{Socail.title}</h6>
<p >{Socail.body}</p>
</div>
</div>

</div>    

        )

    })}


</div>
</div>
)
}
