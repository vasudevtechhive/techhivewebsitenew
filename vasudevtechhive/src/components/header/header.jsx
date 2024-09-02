import './header.css';
// import hero from '../../assets/'
import background from '../../assets/hero-bg.png';
import logo from '../../assets/akshayLogo.png';

function Header()
{
return(
    <div className='headercontainer' > 
         <div className='background'>
            <img src={background}/>
        </div>
         <header   id='navbar'>
         <img src={logo}/>
            <nav>
                <h3>Home</h3>
                <h3>Services</h3>
                <h3>Project</h3>
                <h3>About</h3>
                <h3>Pricing</h3>
                <h3>Testimonials</h3>
                <h3>Blog</h3>
                <button>Contact</button>
            </nav>
         </header>
    </div>
);
}


export default Header;