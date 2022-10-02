import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Capuche from "./pages/capuche/Capuche";
import Veste from "./pages/veste/Veste";
import Pull from "./pages/pull/Pull";
import Panta from "./pages/pantalon/Pantalon";
import Navbar from "./components/navbar/Navbar";
import Casquettes from "./pages/casquettes/Casquettes";
import Buckethat from "./pages/Bucket Hat/Buckethat";
import Mug from "./pages/mug/Mug";
import Thermos from "./pages/thermos/Thermos";
import Bonnet from "./pages/bonnet/Bonnet";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Home /> 
        </Route>
        <Route path="/capuche">
              <Navbar />
              <Capuche />
            </Route>
            <Route path="/veste">
              <Navbar />
              <Veste />
            </Route>
            <Route path="/pull">
              <Navbar />
              <Pull />
               </Route>
            <Route path="/pantalon">
              <Navbar />
              <Panta />
               </Route>
            <Route path="/casquettes">
            <Navbar />
            <Casquettes />
             </Route>
            <Route path="/mug">
            <Navbar />
            <Mug />
             </Route>
            <Route path="/thermos">
            <Navbar />
            <Thermos />
             </Route>
            <Route path="/buckethat">
            <Navbar />
            <Buckethat />
             </Route>
            <Route path="/bonnet">
            <Navbar />
            <Bonnet />
             </Route>
            <Route path="/watch">
              <Watch />
            </Route>
        
      </Switch>
    </Router>
  );
};

export default App;
