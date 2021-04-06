import {Route} from 'wouter'
import './App.css';

//import from pages
import  Inicio  from "./Pages/Home/index";
import Register from "./Pages/Register/index"


function App() {
  return (
    <>
      <Route component={Inicio} path="/" />
      <Route component={Register} path="/resgistro" />
    </>
  );
}

export default App;
