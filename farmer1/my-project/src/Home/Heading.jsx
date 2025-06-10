import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { redirect } from 'react-router-dom';
import './Heading.css'

const CarouselComponent = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
        
          <img src="image.jpeg" className="d-block w-100" alt="mango"  style={{width: '400px',height:'700px'}}/>
          <div className="carousel-caption d-none d-md-block" style={{
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               textAlign: 'center',
               width: '100%'
          }}>
          <h3>Seasonal Farming</h3>
            <ul style={{color : 'white',listStyle:'none'}}>
                <li><h4><b>Kharif (June-Oct) <b>🌧️</b>🌧️(crops): Rice, maize, cotton, pulses, sugarcane.</b></h4></li> 
                <li><h4><b>Rabi (Oct-March) ❄️(crops): Wheat, barley, mustard, gram, potato.</b></h4></li>
                <li><h4><b>Zaid (March-June) ☀️(crops): Rice, maize, cotton, pulses, sugarcane.</b></h4></li>
            </ul>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="neeraj.jpeg" className="d-block w-100" alt="image"  style={{width: '400px',height:'700px'}}/>
          <div className="carousel-caption d-none d-md-block"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%'
       }}>
            <h3 style={{color: "red"}}>TYPES OF FARMING</h3>
           <ul style={{color: 'white', listStyle: 'none'}}>
           <h4><li>Subsistence Farming: Small-scale farming where farmers grow crops for their own consumption with minimal surplus for sale.</li></h4>  
           <h4><li>Commercial Farming: Large-scale farming focused on cash crops like wheat, rice, and cotton for trade and export.</li></h4>  
            <h4><li>Plantation Farming: Cultivation of single cash crops like tea, coffee, rubber, and spices on large estates.</li></h4> 
           <h4><li>Intensive Farming: High-yield farming on small land using modern techniques, fertilizers, and irrigation.</li></h4>  
         <h4><li>Dryland Farming: Farming in arid and semi-arid regions with drought-resistant crops like millets and pulses.</li></h4>
           </ul>
          </div>
        </div>
         
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
