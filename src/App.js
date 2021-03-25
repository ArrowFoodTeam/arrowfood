import {Route} from 'wouter'
import './App.css';
import  Inicio  from "./Pages/Home/index";


function App() {
  return (
    <>
      <Route component={Inicio} path="/" />
    </>
  );
}

export default App;
