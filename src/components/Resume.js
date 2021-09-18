import React from 'react';
import Navbar from './Navbar';
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Particle from './Particle';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        // background: "#233",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up('md')]: {
            width:"44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            }
        }
    },

    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
            
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase",
    }
}));


const Resume = () => {

    const classes = useStyles();

    return (
        <>
        <Navbar />
        <Particle />
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading} >
                Experience professionnel
            </Typography>

            <Box component="div" className={classes.timeLine} >
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >
                    2019-2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading} >
                        SAMSUNG CAMPUS BY EPITECH
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}} >
                        Bac +2: Développeur Web (Full-Stack)
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}} >
                        Integrateur-Développeur Web en full-stack <br />
                    </Typography>
                </Box>

                <br />
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`} > 
                    2018-2019
                </Typography>
               
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        CHAUFFEUR PRIVÉ. !!
                    </Typography>
                    {/* <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        (4 semaines)
                    </Typography> */}
                </Box>
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        ASSISTANT TECHNICIEN INFORMATIQUE TÉLÉ MÉNAGER
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}} >
                        Monter, installer et mettre en service des nouveaux matérieles informatiques. <br />
                        Intervenir en assistance et réparation. 
                    </Typography>
                </Box>

                <br />
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`} > 
                    2015-2018
                </Typography>
               
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Scolarité (Lycée)
                    </Typography>
                </Box>

                <br /> 
                <br />
            </Box>
        </Box>
        </>
    );
};

export default Resume;

