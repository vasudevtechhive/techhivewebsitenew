import './section.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import backvideo from '../../assets/hero-sect-video.mp4';

function WhatWeDoSection()
{
return(
    <div className='section2'>
            <div class="videobackground">
            <video  autoPlay  muted loop id="backgroundvideo">
              <source src={backvideo} type="video/mp4" />
                  Your browser does not support the video tag.
          </video>
          </div>
    <div className='section2subsection1'>
        <h1>What we do?</h1>
        <h4>We create innovative solutions across various domains, transforming ideas into reality with expertise in technology and a commitment to excellence.</h4>
    </div>
        <div className='section2subsection2'>
           <div className='section2box'>
                 <div className='slide'></div>
               <i class="fa fa-pencil fa-2x"></i>
               <h1>Project creation</h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
           </div>
           <div className='section2box mid'>
               <i class="fa fa-pie-chart fa-2x"></i>
               <h1>Software Development</h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
           </div>
           <div className='section2box'>
           <div className='slide'></div>
               <i class="fa fa-tasks fa-2x"></i>
               <h1>Project Management</h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
           </div>
           <div className='section2box'>
           <div className='slide'></div>
               <i class="fa fa-tachometer fa-2x"></i>
               <h1>Project Implement</h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
           </div>
           <div className='section2box'>
           <div className='slide'></div>
               <i class="fa fa-recycle fa-2x"></i>
               <h1>Software Update</h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
           </div>
           <div className='section2box'>
           <div className='slide'></div>
               <i class="fa fa-handshake fa-2x"></i>
               <h1>24/7</h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
           </div>
        </div>
   </div>
);
}


export default WhatWeDoSection;