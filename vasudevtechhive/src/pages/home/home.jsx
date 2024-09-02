import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './home.css';
import desktoplogo from '../../assets/hero.png';
import WhatWeDoSection from '../../components/whatwedosection/section';
import AboutUs from '../../components/aboutus/section';
import Portfolio from '../../components/portfolio/section';



function Home()
{
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
return(
    <div>
        <Header/>
         <div className='mainbody'>
            <div className='section1'>
                <div className='section1_leftsubsection'>
                    <h1>Software</h1>
                    <h2>DEVELOPMENT</h2>
                    <h4>Our business is helping you grow your business. We offer Best Web 
                        & <br/>Applications Solutions, 
                        Project Management, Software Update, Google Cloud,<br/> SEO optmization, Social Media Services...</h4>
                </div>
                <div className='section1_rightsubsection'>
                   <img src={desktoplogo}/>
                </div>
            </div>
            <WhatWeDoSection/>
            <AboutUs/>
            <Portfolio/>
         </div>
        <Footer/>
    </div>
);
}


export default Home;