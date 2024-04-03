import { Route, Routes } from "react-router-dom";
import Contact from "./Componants/Contact";
import Index from "./Componants/Index";
import NavBar from './Componants/Navbar/index'
import Work from "./Componants/Work";
import Profile from "./Componants/Profile";
import About from "./Componants/About";
import PortFolio from "./Componants/PortFolio";
import SocailMedia from "./Componants/SocailMedia";
import { Drop } from "./Componants/drop/drop";
export default function App(){
return(
<div>
<NavBar />
<Routes>
<Route exact path="/" element={<Index/>}></Route>
<Route path="Work" element={<Work/>}></Route>
 <Route path="Profile" element={<Profile/>}></Route>
<Route path="PortFolio" element={<PortFolio/>}></Route>
<Route path="Drop" element={<Drop/>}></Route>
<Route path="SocailMedia" element={<SocailMedia/>}></Route>
<Route path="About" element={<About/>}></Route>
<Route path="Contact" element={<Contact/>}></Route>
</Routes>



</div>
)
}
