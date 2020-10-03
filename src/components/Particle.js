import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Particles from "react-particles-js";

const useStyles = makeStyles({
    particlesCanva2: {
        position: "absolute",
        opacity: "0.5",
    }
});


const Particle = () => {
    
    const classes = useStyles();

    return (
        <>
            <Particles 
            canvasClassName={classes.particlesCanva2}
                params={{
                    particles: {
                        number: {
                            value: 40,
                            density: {
                                enable: true,
                                value_area: 600,
                            }
                        }, 
                        shape: {
                            type: "circle",
                            stroke: {
                                color: "tomato",
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true,
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default Particle;