import { useState } from "react"
import { useEffect } from "react"
import "./Styls.css"


export default function Profile(){
    const [data,setdata]=useState([])
    const [data2,setdata2]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/My_Profile")
        .then(res=>res.json())
        .then(data=>setdata(data))
    })
    useEffect(()=>{
        fetch("http://localhost:8000/skills")
        .then(res=>res.json())
        .then(data=>setdata2(data))
    },[])

    
return(
<div className="My Profile mt-3">
<div className="container">
<div className="row gap-4 mt-4">
<div className="col col-lg-5 col-md-6 col-12">
{/* ********* */}
<h2 className=" fs-1 ">My Profile</h2>
<div  className="row">
<div className="col col-lg-3 ms-3">
{data.map((pro)=>{
    return(
        <p className="fw-bold" key={pro.id}>{pro.tilte}</p>
    )
})}
</div>
<div className="col col-lg-3 ms-3">
    <p className="mb-3 ">AbdullahOrabi</p>
    <p className="mb-3 ">23/3/2024</p>
    <p className="mb-3"> Ain shams</p>
    <p className="mb-3">0951217656</p>
    <p className="mb-3">Abdullah@gmail.com</p>
    <p className="mb-3">www.google.com</p>
</div>
</div>
{/* ********* */}
</div>
<div className="col col-lg-6 ms-3 text-lg-start text-center">
    <h2 className="fs-1 fw-bold"> Some skills</h2>
    <p className="text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</p>
    {data2.map((Skill)=>{
        return(
            <div  key={Skill.id} style={{width:Skill.width}} className="m-2 skill d-flex justify-content-between">
                <p>{Skill.skill}</p>
                <p>{Skill.width}</p>
            </div>
        )
    })}
</div>
</div>
</div>
</div>
)
}
