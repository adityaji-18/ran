import Navbar from './components/Navbar';
import './App.css';
import TextFom from './components/TextFom';
import { useState } from 'react/cjs/react.development';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
// import About from './components/About';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setMode]= useState('light');
  const toggleMode =() =>{
    if(mode === 'light'){
        setMode('dark');
        document.title="TextUtills Dark Mode";
      }
      else{
        setMode('light ');
        document.title="TextUtills Light Mode";
      }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutiils" about="About" toggleMode= {toggleMode} mode={mode} />
    <div className="container my-3">
    {/* <Switch> */}
        
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            
          </Route>
          
    </Switch> */}
    <TextFom heading="Enter The Text To Analyze:" mode={mode}/>
    </div>
    {/* </Router> */}
   </>
    
  );
}
export default App;
