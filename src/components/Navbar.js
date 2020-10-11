import React, {useState} from 'react';
import {Link} from "react-router-dom";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import avatar from "../media/avatar3.png";
import Footer from './Footer';

import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Avatar,
    Divider,
    List,
    Typography,
    Box, 
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";


/********** CSS STYLES  ********/
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        height: "100%",
        background: "#511",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan",
    }
}))
/*******************************/

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/portfolio2",
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Expérience professionnelle",
        listPath: "/resume",
        
    },
    {
        listIcon: <Apps />,
        listText: "Projets",
        listPath: "/projets",

    },
    {
        listIcon: <ContactMail />,
        listText: "Contacter",
        listPath: "/contact",

    },
]
// console.log(menuIcons);

const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open});
    };

    const classes = useStyles(); // Qui fait appel à la constante "useStyles" qui est déclaré tout en haut

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Issa Demirci" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
            <br />
            {/* <IconButton onClick={toggleSlider("right", true)} >
                <ArrowBack style={{color: "white"}} />
                <Button style={{color: "white"}}>Retour</Button>
            </IconButton> */}
        </Box>
    )
    return (
        <>
        <Box>
            <AppBar position="static" style={{background: "#222" }}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)} >
                        <ArrowBack style={{color: "tomato"}} />
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}} className="portfolio" > Menu </Typography>
                    <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
};


/*********************
 *  Petit modification(entrainement) au niveau de bouton de "Back" 
 * 
 * 
const theme = createMuiTheme({
    palette: {
        primary: blue,
        background: red,
    },
    typography: {
        fontSize: 15,
    },
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: "#E9967A",
                '&:hover': {
                    backgroundColor: "red",
                }
            },
            
        }
    },
}); 

*************************************/





export default Navbar;