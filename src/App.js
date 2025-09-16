import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Auth from './components/Auth';
import Login from './components/Login';
import Register from './components/Register';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode ] = useState('light');
  const [btnText, setBtnText ] = useState('Enable Dark mode');
  const [ alert, setAlert ] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    const alertBox = document.querySelector('.alert');
    if (alertBox) {
      alertBox.classList.add('show');
    }
    // Add a class to trigger fade-out before hiding the alert.
    setTimeout(() => {
      const alertBox = document.querySelector('.alert');
      if (alertBox) {
        alertBox.classList.add('fade-out');
        alertBox.classList.remove('show');
      }
    }, 2000);
  }
  const removeBgClass =() => {
    const bgClasses = [ 'bg-danger', 'bg-warning', 'bg-info', 'bg-success'];
    document.body.classList.remove(...bgClasses);
  }
  const changeBGColor = (cls) => {
    removeBgClass();
    document.body.classList.add('bg-'+cls);
  }

  const toggleMode = (cls) => {
    removeBgClass();
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Toggle mode');
      document.body.style.backgroundColor = 'rgb(7 34 62)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "info");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      // Logic to change mode.
      setMode('light');
      setBtnText('Toggle mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "info");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <header>
          <Navbar showAlert={showAlert} title="TextUtils" aboutText="About Us" changeBGColorElem={changeBGColor} toggleMode={toggleMode} mode={mode} btnText={btnText} />
        </header>
        <main>
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<TextForm heading="Text Analyzer" mode={mode} btnText={btnText} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} btnText={btnText} toggleMode={toggleMode} />} />
            <Route path="auth" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
  // return (
  //   <>
  //     <header>
  //       <Navbar title="TextUtils" aboutText="About Us" toggleMode={toggleMode} mode={mode} btnText={btnText} />
  //     </header>
  //     <main>
  //       <Alert alert={alert} />
  //       <TextForm heading="Text Analyzer" mode={mode} btnText={btnText} showAlert={showAlert} />
  //     </main>
  //     <Footer />
  //   </>
  // );
}

export default App;
