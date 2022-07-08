import React from 'react';
import { NavLink } from 'react-router-dom';
import web from './Images/img1.jpg';
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common
                name="Grow your Business with"
                imgsrc={web}
                visit="/service"
                btnName="Get Started"
            />
        </>
    );
}
export default Home;
