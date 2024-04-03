import "./styls.css"
export function Drop(){
return(
<div className="Drop">
<div className="container">
<h2 className="text-center mb-3 fs-1">Drop Me A line</h2>
<form  className="text-center ">
<div className="inputs d-flex justify-content-center ">
<input className="me-3" type="text" placeholder="Your Name"></input>
<input type="text" placeholder="Your Email"></input>
</div>
<input className="w-100 mt-3" type="text" placeholder="Your Object"></input>
<textarea className="w-100 mt-3 bg-black-50" placeholder="Your Message"></textarea>
<button type="submit" className="p-3 border mt-2">Send Message</button>            
</form>
</div>
</div>
)
}
