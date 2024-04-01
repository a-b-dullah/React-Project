import About from "../About/index";
import PortFolio from "../PortFolio/index";
import Profile from "../Profile/index";
import SocailMedia from "../SocailMedia/index";
import Home from "../Home/index";
import Work from "../Work/index";
import { Drop } from "../drop/drop";
import Footer from "../Footer";
export default function Index(){
    return(
        <div>
            <Home/>
            <Work/>
        <PortFolio/>
        <Profile/>
        <Drop/> 
        <About/>
        <SocailMedia/>
        <Footer/>
        </div>
    )
}
