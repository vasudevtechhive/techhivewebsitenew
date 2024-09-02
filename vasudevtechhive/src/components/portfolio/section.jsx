import './section.css';
import about from '../../assets/aboutus.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import portfoliovideo from '../../assets/183108-870151713.mp4';

import port1 from '../../assets/port1.jpg';
import port2 from '../../assets/port2.jpg';
import port3 from '../../assets/port3.jpg';

function Portfolio()
{


return(
    <div className='portfoliocontainer'>
           <div class="videobackgroundportfolio">
            <video  autoPlay  muted loop id="backgroundvideoportfolio">
              <source src={portfoliovideo} type="video/mp4" />
                  Your browser does not support the video tag.
          </video>
          </div>
        <div className='abouttextheadline'>
            <h2>Featured PortFolio</h2>
            <h4>Explore our portfolio to see how we transform ideas into impactful solutions with creativity and expertise.</h4>
        </div>
        <div className='portfoliosection'>
            <div className='portfoliobox'>
                <div className='portfoliochild1'>
                    <img src={port1} alt=''/>
                </div>
                <div className='portfoliochild2'>
                    <h2>lorem ipsim</h2>
                    <h3>lresum ipsum</h3>
                </div>
            </div>
            <div className='portfoliobox'>
                <div className='portfoliochild1'>
                    <img src={port2} alt=''/>
                </div>
                <div className='portfoliochild2'>
                    <h2>lorem ipsim</h2>
                    <h3>lresum ipsum</h3>
                </div>
            </div>
            <div className='portfoliobox'>
                <div className='portfoliochild1'>
                    <img src={port3} alt=''/>
                </div>
                <div className='portfoliochild2'>
                    <h2>lorem ipsim</h2>
                    <h3>lresum ipsum</h3>
                </div>
            </div>
            <div className='portfoliobox'>
                <div className='portfoliochild1'>
                    <img src={port1} alt=''/>
                </div>
                <div className='portfoliochild2'>
                    <h2>lorem ipsim</h2>
                    <h3>lresum ipsum</h3>
                </div>
            </div>
            <div className='portfoliobox'>
                <div className='portfoliochild1'>
                    <img src={port3} alt=''/>
                </div>
                <div className='portfoliochild2'>
                    <h2>lorem ipsim</h2>
                    <h3>lresum ipsum</h3>
                </div>
            </div>
            <div className='portfoliobox'>
                <div className='portfoliochild1'>
                    <img src={port2} alt=''/>
                </div>
                <div className='portfoliochild2'>
                    <h2>lorem ipsim</h2>
                    <h3>lresum ipsum</h3>
                </div>
            </div>
        </div>
    </div>)
}

export default Portfolio;