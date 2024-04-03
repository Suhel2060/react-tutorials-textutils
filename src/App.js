import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const removeclass = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode = (cls) => {

    removeclass();
    document.body.classList.add("bg-" + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#2e2f4a"
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success")

    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container my-3" >

          <Routes>
            <Route exact path='/about' element={<About />} />
            

            <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} alert={showAlert} />}/>
          </Routes>
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} alert={showAlert} /> */}

        </div>
      </Router>
    </>
  );

}

export default App;
