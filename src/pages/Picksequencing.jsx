import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import multibanner from '../Assets/multibanner.png'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import Chart  from './Chart';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import orderprocessing from '../Assets/orderprocessing.svg'
import './Responsive.css'
import multichannelintegration from '../Assets/Multichannelintegration.svg'
import { useNavigate } from 'react-router-dom';
import './commoncss.css'
import Footer from '../components/Footer';
const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Picksequencing() {

  const [selectedItem, setSelectedItem] = useState(items[0]); // Default to the first item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '', image: '' });

  const cardContents = [
    {
      title: "The Leading AI-Powered Fulfilment Automation System",
      body: "Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.",
      image: "../Assets/work3.jpg" // Update as needed for each card
    },
    {
      title: "Hybrid Proprietary Methodology, Opti-Pick",
      body: "Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business..",
      image: "../Assets/work4.jpg" // Replace with actual image path
    },
    {
      title: "Unlocking Fulfilment Automation Potential",
      body: "Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.",
      image: "../Assets/integration.webp" // Replace with actual image path
    },
  ];

  const images = [
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work2.webp',
    },
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work3.jpg',
    },
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work4.jpg',
    },
  ];

  const handleShow = (index) => {
    setModalContent(cardContents[index]);
    setShowModal(true);
  };







  const [activeTab, setActiveTab] = useState(''); // Set default active tab

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  const navigate=useNavigate()
  const handleMultichannelintegration=()=>{
      navigate('/multichannelintegration')
  }
  const handleOrderProcessing=()=>{
      navigate('/orderprocessing')
  }
  const handlePicklistgeneration=()=>{
      navigate('/picklistgeneration')
  }
  const handleWorkforcemanagement=()=>{
      navigate('/workforcemanagement')
  }
  const handlePicksequencing=()=>{
      navigate('/picksequencing')
  }
  const handlePickandshipping=()=>{
      navigate('/pickandshipping')
  }
  const handleFulfillmentvalidation=()=>{
      navigate('/fulfillmentvalidation')
  }
  const handleEcommerceintegration=()=>{
      navigate('/ecommerceintegration')
  }
  const handleApora=()=>{
    navigate('/aporafulfillmentautomation')
  }
  
// ==================================================================
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">
 <div style={{height:"40vh"}}>
 <div className='starting-picksequencing'>
    <h1 className="gradient-text">Boost efficiency with pick sequencing</h1>
    {/* <h3 className="gradient-text">Customer Satisfaction</h3> */}

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={aporablack} alt="" style={{height:"80px"}}/></h6>
    </div>
    </div>

    
    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart">
  <h1 class="level-1 rectangle "  onClick={handleApora}>APORA</h1>
  <ol class="level-2-wrapper">
    <li>
      <h6 class="level-2 rectangle " onClick={handleMultichannelintegration}>Multi-Channel Integration</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleOrderProcessing}> Order Processing</h6>
     
    </li>
      <li>
      <h6 class="level-2 rectangle" onClick={handlePicklistgeneration}>Pick List Generation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleWorkforcemanagement}>Work Force Management</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle bg-success text-white" onClick={handlePicksequencing}>  Pick Sequencing</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handlePickandshipping}>Package & Shipping</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleFulfillmentvalidation}> Fulfillment Validation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleEcommerceintegration}>  E-Commerce Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>

 </div>




 <div className='firstdiv-multichannelintegration'>
    <div className='multichannelintegration-image wrapper'>
        <img src={orderprocessing} alt=""  className='image--cover'/>
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>Optimizing order fulfilment processes is crucial to meet customer demands efficiently. Traditional pick routing methods often rely on manual decision-making, which can be time-consuming and prone to errors. However, with the advent of AI-powered pick routing systems integrated into Warehouse Management Systems (WMS), organizations can revolutionize their operations.
        Our AI-powered pick routing system is a game-changer for organizations seeking to optimize order fulfilment and enhance overall warehouse productivity. By harnessing the power of artificial intelligence, businesses can intelligently determine the most efficient picking routes, reduce errors and adapt to real-time changes. With enhanced efficiency, improved accuracy and real-time adaptability, organizations can streamline their warehouse operations and deliver exceptional customer experiences.</p>    </div>
   </div>





   <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <h2 className='gradient-text'>Features</h2>
      </div>
      <div className='row justify-content-center '>
        {/* Card 1 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Intelligent Route  Optimization</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Order Analysis' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black",fontSize:"14px"}}>The AI-powered pick routing system utilizes advanced algorithms to analyse order details, item locations, and warehouse layout. It derives the most efficient routes for picking based on factors such as item proximity , location sequence and order priorities. This  optimization minimizes travel time and maximizes picking efficiency.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Real-Time Inventory Visibility</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Inventory Management' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black",fontSize:"14px"}}>The pick sequencing system integrates with the Warehouse Management System to access real-time inventory data. It considers inventory availability, item locations, and stock levels when determining optimal picking routes. This ensures accurate and up-to-date information for efficient order fulfilment.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Effective Resource Utilization</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Real-Time Analytics' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black",fontSize:"14px"}}>The AI-powered pick sequencing system analyzes items across daily orders to assess each picker's activity level in their assigned zone. By strategically assigning picklists based on item volume and workload, it minimizes unnecessary walking, enhancing productivity and ensuring efficient order fulfillment.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>



    <div className='seconddiv-orderprocessing'>
    <h1>Value Delivered</h1>
</div>
<Container fluid className='seconddiv-orderprocessing-container'>
 

    <div className='valuedelivered-maindiv-orderprocessing'>
  <div className='valuedelivered-firstdiv-orderprocessing'>
    <img src={improveresouceutilisation} alt="" />
    {/* <h6>Improved Resource Utilisation</h6> */}
    <p><b>Enhanced Efficiency</b> is achieved through AI-powered pick routing, which utilizes advanced algorithms to analyze various factors such as order details, inventory availability, item locations, and employee workloads. By considering these elements, the system intelligently determines the most efficient route for picking orders, minimizing travel time, reducing congestion, and improving overall warehouse efficiency.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src={efficiency} alt="" />
    {/* <h6>Real Time Visibility</h6> */}
    <p><b>Real-Time Adaptability</b> is a key feature of AI-powered pick routing systems, which continuously monitor and analyze data within the warehouse environment. This capability allows the system to adjust to changing conditions, such as products stored in multiple locations and stocks comprised of various batches or lots. As a result, picking routes are dynamically optimized for efficiency and responsiveness.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src={improvedorderaccuracy} alt="" />
    {/* <h6>Improved Order Accuracy</h6> */}
    <p><b>Error Reduction</b> is a significant benefit of AI-powered pick routing, which eliminates the susceptibility to manual decision-making errors, such as selecting incorrect routes or overlooking optimal paths. By leveraging intelligent algorithms that make data-driven decisions, the system reduces the likelihood of picking mistakes, improves order accuracy, and enhances customer satisfaction.</p>
  </div>
 
</div>
</Container>







<div className='resp-footer'>
  <Footer/>
</div>

    </div>
  )
}

export default Picksequencing