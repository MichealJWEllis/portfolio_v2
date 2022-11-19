import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/expreience/Experience";
//import MyServices from "./components/myServices/Myservices";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import video from "./assets/video/DJI_0043_Trim.mp4";

const App = () => {
    return (
        <>
            
            <video loop autoPlay id="myVideo">
                <source src={video} type="video/mp4" />
            </video>
            <Nav />
            <Header />
            <About />
            <Experience />
            {/* <MyServices /> */}
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
