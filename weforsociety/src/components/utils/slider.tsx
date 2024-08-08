import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import imageAbout2 from '../../assets/images/nodrugs.jpg'
import imageAbout1 from '../../assets/images/about.jpg'
import imageAbout3 from '../../assets/images/blooddonation.jpg'
import '../../css/sliderStyle.css'

const Slider = () => {
    const images = [
        imageAbout1,
        imageAbout2,
        imageAbout3,
    ];

    const buttonStyle = {
        width: "40px",
        background: 'none',
        border: '3px #dfdfdf solid',
        color: '#aeaead',
        borderRadius: '30px',
        margin: '30px',
        padding : '5px',
        top: '30%'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#dfdfdf"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#dfdfdf"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }

    return (
        <Slide {...properties}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>

                </div>
            </div>
        </Slide>
    );
};

export default Slider;