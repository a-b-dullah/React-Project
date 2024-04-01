import "./style.css"
import { Link } from "react-router-dom"
export default function About(){
return(
<div className="Creative">
<div className="creative-info  text pt-5">
<h2 className="info-title"><span>This is</span> Me</h2>
<h4 className="info-dir fs-1 h4">Creative Director</h4>
<p className="info-desc fs-lg-5 fs-6">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Link >explicabo</Link> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
</p>
<p className="info-desc fs-lg-5 fs-6">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
</p>
</div>
</div>
)
}
