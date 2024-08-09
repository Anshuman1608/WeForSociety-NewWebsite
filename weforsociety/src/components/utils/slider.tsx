import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import imageAbout2 from '../../assets/images/nodrugs.jpg';
import imageAbout1 from '../../assets/images/about.jpg';
import imageAbout3 from '../../assets/images/blooddonation.jpg';
import '../../css/sliderStyle.css';
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
const Slider = () => {
    const images = [
        { src: imageAbout1, title: "Support Our Cause", description: "Empower Lives and Inspire Changes" },
        { src: imageAbout2, title: "Choose Life, Not Drugs", description: "Embrace Hope, Seek Help, Stay Strong" },
        { src: imageAbout3, title: "Your Donation", description: "A Gift of Hope, Changing Lives for Good." }
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
    };

    return (
        <Slide {...properties}>
            {images.map((image, index) => (
                <div className="each-slide-effect" key={index}>
                    <div className="slide-content" style={{ backgroundImage: `url(${image.src})` }}>
                        <div className="overlay">
                            <div className="text-content">
                                <h3>{image.title}</h3>
                                <p className='description'>{image.description}</p>
                                <button className="donate-button">Donate</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slide>
    );
};

export default Slider;
