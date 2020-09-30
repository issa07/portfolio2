import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})


const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Header />
            <Particles 
            canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 50,
                            densityl: {
                                enable: false,
                                value_area: 900
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default Home;
