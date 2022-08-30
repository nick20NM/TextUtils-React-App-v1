import React,{ useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light"); // whether dark mode is enabled or not

  const [alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses= ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  }

  // const toggleMode= ()=>{
  const toggleMode= (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      // showAlert("dark mode has been enabled","success");
      showAlert("background color changed","success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing App"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
      // showAlert("light mode has been enabled","success");
      showAlert("background color changed","success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Navbar title="100" aboutText="200" /> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="class container my-1">
       <TextForm  heading="enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
        {/* <About/> */}
      {/* </div> */}

       <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="class container my-1">
          <Routes>
            {/* exact path
            /users -> component1
            /users/home -> component2 */}
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<TextForm  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
        </div>
       </Router>
    </>
  );
}

export default App;
