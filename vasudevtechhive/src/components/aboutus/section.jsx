import './section.css';
import about from '../../assets/aboutus.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AboutUs()
{
return(
    <div className='aboutcontainer'>
        <div className='abouttextheadline'>
            <h2>About Us</h2>
            <h4>VasudevTechHive Pvt Ltd is dedicated to shaping the future with visionary solutions and a commitment to excellence</h4>
        </div>
        <div className='aboutsection1'>
            <div className='aboutsection1_leftsubsection' style={{marginLeft:'150px'}}>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                    <h4>AI/ML</h4>
                  </div>
               </div>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                  <h4>Virtual Reality (VR)</h4>
                  </div>
               </div>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                  <h4>Augmented Reality (AR)</h4>
                  </div>
               </div>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                  <h4>Game Development (Unity)</h4>
                  </div>
               </div>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                  <h4>MACHINE LEARNING</h4>
                  </div>
               </div>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                  <h4>Cloud (AWS)</h4>
                  </div>
               </div>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                  <h4>Big Data Analytics (Hadoop & Spark)</h4>
                  </div>
               </div>
               <div className='aboutsectionbar'>
                  <div className='aboutsectionsubbar' style={{width:'100%'}}>
                  <h4>Web Development</h4>
                  </div>
               </div>
            </div>
            <div className='aboutsection1_rightsubsection' style={{marginLeft:'150px'}}>
                <img src={about}/>
                <div className='righttextsection'>
                <section style={{textAlign:'center',width:'100%'}}>
                    <h2 style={{textAlign:'center',width:'100%',color:'white',textDecoration:'underline'}}>
                        Featured Services
                    </h2>
                </section>
                <section>
                <i class="bi bi-arrow-right-square-fill fa-2x"></i>
                    <h3>Web, iOS, Android Development</h3>
                </section>
                <section>
                <i class="bi bi-arrow-right-square-fill fa-2x"></i>
                    <h3>Web3 & Solidity Smart contracts</h3>
                </section>
                <section>
                <i class="bi bi-arrow-right-square-fill fa-2x"></i>
                    <h3>Unity 3D (Mobile, Desktop) Games Development</h3>
                </section>
                <section>
                <i class="bi bi-arrow-right-square-fill fa-2x"></i>
                    <h3>Blockchain & NFT</h3>
                </section>
                <section>
                <i class="bi bi-arrow-right-square-fill fa-2x"></i>
                    <h3>ThreeJS - WebGL Games Development</h3>
                </section>
                </div>
            </div>
    </div>
</div>)
}

export default AboutUs;