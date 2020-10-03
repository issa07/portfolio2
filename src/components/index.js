import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
// import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import Projets from './Projets';
import Particle from './Particle';

const Home = () => {


    return (
        <div>
            <Navbar />
            <Header />
            {/* <Projets /> */}
            <Particle />
            
        </div>
    );
};

export default Home;
