import React, { Component } from 'react';
//import logo from './logo.png';
import me from './me.jpg';
import './App.css';

class App extends Component {
    componentDidMount() {  
        // var menu = document.querySelector('#menu')
        // var main = document.querySelector('.main')
        // var drawer = document.querySelector('#drawer')
  
        // menu.addEventListener('click', function (e) {
        //     drawer.classList.toggle('open')
        //     e.stopPropagation()
        // })
        // main.addEventListener('click', function () {
        //     drawer.classList.remove('open')
        // })
     
    }

    render() {
        return (
            <div className="App">            
            {/* <div className="App-header">
                <div className="name">                    
                    <span>Gian Felipe</span>
                     <a className="headerMenu" id="menu" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
                    </svg>
                </a>                
                </div>
            </div> */}
            <div className="main">
            {/* <nav id="drawer" className="nav">
                    <ul>
                        <li className="firstMenu">
                            <a href="#"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-briefcase" aria-hidden="true"></i> Resume</a>
                        </li>
                        <li>
                            <a href="#"> <i className="fa fa-phone" aria-hidden="true"></i> Contact</a>
                        </li>
                    </ul>
                </nav>   */}
                <div className="main-header">
                   <div className="my-picture">
                        <img src={me} className="me" alt="Gian Felipe"/>
                    </div>
                    <div className="main-text">
                        <h1> Hello ! </h1>
                        <div className="language">
                        <ul>
                            <li className="englishButton">English</li>
                            <li className="portugueseButton">Português</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <ul>
                <li className="socialMedias">
                    <a href="mailto:gianfelipe93@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o" aria-hidden="true"></i> </a>
                    </li>
                <li className="socialMedias">
                    <a href="http://www.linkedin.com/in/gianfelipe" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
                    </li>
                <li className="socialMedias">
                    <a href="https://github.com/gianfelipe93" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> </a>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default App;
