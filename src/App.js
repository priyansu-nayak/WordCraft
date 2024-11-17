
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  let body = document.body;
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null) }, 1200);
  }


  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }



  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark')
      body.style.backgroundColor = '#042346';
      body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success');

    }

    else {
      setMode('light')
      body.style.backgroundColor = '#F2F0DF';
      body.style.color = '#212925';
      showAlert('Light mode has been enabled', 'success');

    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="WordCraft" aboutText="About" mode={mode}  /> 
        {/* toggleModeFunc={toggleMode} */}
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />}></Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try WordCraft - Word Counter, Character Counter Remove Extra Spaces" mode={mode} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;