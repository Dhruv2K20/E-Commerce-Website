import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      
     <div className='container'>
      
     <img  src='https://img.lovepik.com//photo/40007/3642.jpg_300.jpg' className='home__image' alt=''></img>
     
    
     <div className='row'>
       
     <Product id="1254635839" title="Fossil Analog Blue Dial Men's Watch - FS5237"  price={6999} 
              image='https://m.media-amazon.com/images/I/81MJx+6PmYS._UX522_.jpg'
              rating={5}/>
     
    <Product id="3415698746" title="boAt Wave Call Smart Watch" price={1699} 
              image='https://m.media-amazon.com/images/I/41RulQ1ZXbL._SX300_SY300_QL70_FMwebp_.jpg'
               rating={4}  />

     
     </div> 
     
     <div className='row'>
       
     <Product id="6498745489" 
               title="Amazon Basics 4G LTE WiFi Single_Band Dongle with All SIM Support"
               price={6100}
               image="https://m.media-amazon.com/images/I/61h-yNsKWuL._SX679_.jpg"
                rating={4}  />


     <Product id="6456145678"
              title="PTron Bassbuds Neo TWS Earbuds, HD Mic, 35Hrs Playtime, Bluetooth 5.3 Headphones, Type-C Fast Charging & IPX5 Water Resistant(Grey)"
              price={3199}
              image="https://m.media-amazon.com/images/I/61rvcsMoRYL._SL1500_.jpg"
              rating={5}      />
     

     <Product id="1479645315"
              title="PTron Tangent Duo Bluetooth 5.2 Wireless in Ear Earphones with Mic, 24Hrs Playback, Fast Charging Type-C Neckband, Voice Assistant & IPX4 Water Resistant (Black)"
              price={1899}
              image="https://m.media-amazon.com/images/I/51UZ-HlaT9L._SX679_.jpg"
              rating={3}      />
     
     </div> 

     <div className='row'>
       
      <Product id="2486347852"
              title="Eufy Security Mini IndoorCam | 2K Super Clear | AI Human Detection| Work with Alexa| No Monthly fee| Wi-Fi CCTV |Privacy Mode"
              price={5399}
              image="https://m.media-amazon.com/images/I/51AndeeFtOL._SX522_.jpg"
              rating={4}      />

    <Product id="3478954624"
              title="HUION KAMVAS 22 Plus Pen Display Graphics Drawing Tablet with Full-Laminated QD LCD Screen 140% s RGB Android Support Battery-Free Stylus 8192 Pen Pressure Tilt Adjustable Stand - 21.5inch"
              price={50299}
              image="https://m.media-amazon.com/images/I/71vQk5sdPWL._SX522_.jpg"
              rating={5}      />        
    
     </div> 


     </div>      
    </div>
  )
}

export default Home
