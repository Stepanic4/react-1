import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div class ='app-wrapper-content'>
                {/*<Dialogs/>*/}
                <Profile/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
