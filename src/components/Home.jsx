import React from 'react';
import {Navbar, Nav} from 'reactstrap';
import home from '../images/home.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/App.css'
import {NavLink} from 'react-router-dom'
import Slider from "react-slick";

var settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  arrows:false,
  dots:false,
  arrows:true

};
class Home extends React.Component {

  render () {

    const navstyle = {
       color: "black",
       fontFamily: "Candara",
       fontWeight: "bold",
       fontSize: "14px"
     };
    return (
      <div>
      <Slider {...settings}>
        <div>
          <img src={ require('../images/dome_white.jpg') } width="100%" height="700"/>
        </div>
        <div>
          <img src={ require('../images/liner_white.jpg') } width="100%" height="700"/>
        </div>
        <div>
          <img src={ require('../images/gen_white.jpg') } width="100%" height="700"/>
        </div>
      </Slider>
      <div className="container">



       <br/><br/><h1>Manufacturer & Supplier of Polythene Packaging Products</h1>
<p>Established in 2010, at Bengaluru, Karnataka, India, SBM Polymers is engaged in manufacturer and supplier
of Polythene Packaging Products such as Packaging Bags, Packaging Sheets, Packaging Films, and Polythene Products.
We aim at complete customer satisfaction by delivering good quality products within the committed time period and at
competitive prices. The finesse of our laminated sheets is unparalleled and hence are extensively in demand.
Our dedicated & professional team has given the  quality products And  upgrading of our plant and machinery to a world class manufacturing facility has resulted in more efficiencies of production and thus has contributed to the overall growth objectives of the company.</p>
</div>
<br/><br/>
<hr  style={{
    color: '#3f97a6',
    backgroundColor: '#3f97a6',
    height: .5,
    borderColor : '#3f97a6'
}}/>
<br/><div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100'}}><h1>Our Products</h1></div>

<div class="row" style={{backgroundColor: '#3f97a6',  justifyContent: 'center', display: 'flex',  justifyContent:'center', alignItems:'center', height: '800'}} ><p><br/><h1>Get A Free Quote / Need a Help ? Contact Us</h1><br/></p></div>
<div class="row"><br/><br/></div>
<div class="row">
<div class="col-xs-12 col-sm-1 col-md-1 no-padding">
</div>

<div class="col-xs-12 col-sm-2 col-md-2 no-padding">
<div style={{textDecorationLine: 'underline'}}>Menu</div>
<a  href="/" style={navstyle}>Home</a><br/>
<a  href="/profile" style={navstyle}>Profile</a><br/>
<a  href="/products" style={navstyle}>Infrastructure & Products</a><br/>
</div>
<div class="col-xs-12 col-sm-3 col-md-3 no-padding">
<div style={{textDecorationLine: 'underline'}}>Products</div>
</div>
<div class="col-xs-12 col-sm-3 col-md-3 no-padding">
<div style={{textDecorationLine: 'underline'}}>Contact</div>
</div>
<div class="col-xs-12 col-sm-3 col-md-3 no-padding">
Location
</div>



</div>

</div>);
  };
}

export default Home;
