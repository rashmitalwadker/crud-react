import React from 'react'
import './Products.css';
import { Carousel } from 'react-bootstrap';
const Home = () => {
    return ( <
        Carousel className = "container" >
        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "images/41MGmFt2Z2L._SX300_SY300_QL70_FMwebp_.webp"
        alt = "First slide" /
        >
        <
        Carousel.Caption >
        <
        h3 > First slide label < /h3> <
        p > THESE ARE THE PRODUCTS OF OUR STORE < /p>

        <
        /Carousel.Caption> < /
        Carousel.Item > <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "images/3.jpg"
        alt = "Second slide" /
        >

        <
        Carousel.Caption >
        <
        h3 > Second slide label < /h3> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> < /
        Carousel.Caption > <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "images/41MGmFt2Z2L._SX300_SY300_QL70_FMwebp_.webp"
        alt = "Third slide" /
        >

        <
        Carousel.Caption >
        <
        h3 > Third slide label < /h3> <
        p > Praesent commodo cursus magna, vel scelerisque nisl consectetur. < /p> < /
        Carousel.Caption > <
        /Carousel.Item> < /
        Carousel >

    );
}
export default Home;