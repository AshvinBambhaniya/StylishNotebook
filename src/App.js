import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { useState } from 'react';

import About from './components/About';
import NoteState from './context/NoteState';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { Home } from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    return (
        <>
            <NoteState>
                <Router>
                    <Navbar />
                    <Alert alert={alert} />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home showAlert={showAlert} />} />
                            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
                            <Route exact path="/about" element={<About />} />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </>
    );
}

export default App;