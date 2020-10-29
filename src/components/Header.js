import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../media/avatar3.png";


// CSS STYLES
const useStyles = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        marginBottom: '3rem',
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // width: "100vw",
        textAlign: "center",
        zIndex:1,
    }


}));


const Header = () => {

    const classes = useStyles()

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Issa DEMIRCI" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed className="avatar" strings={["Issa DEMIRCI"]} typeSpeed={40} /> <br />
                <Typed className="avatar" strings={["Etudiant en Intégrateur-Développeur Web chez Samsung Campus By Epitech"]} typeSpeed={30} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Developement", "Web Design", "Front-End", "Back-End", "Developper full-stack"]} 
                typeSpeed={60} backSpeed={70} loop />
            </Typography>
        </Box>
    );
};





export default Header;