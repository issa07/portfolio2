import React, {useState} from 'react';
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';

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
    // Button,
} from "@material-ui/core";

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
// import { blue, green, red } from '@material-ui/core/colors';
import avatar from "../media/avatar2.png"

/********** CSS STYLES  ********/
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        height: "30rem",
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
    },
    {
        listIcon: <AssignmentInd />,
        listText: "A propos de moi",
    },
    {
        listIcon: <Apps />,
        listText: "Projets",
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacter",
    }
]
// console.log(menuIcons);

const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => {
        setState({ ...state, [slider]: open});
    };

    const classes = useStyles() // Qui fait appel à la constante "useStyles" qui est déclaré tout en haut

    const sideList = slider => (
    <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avatar} src={avatar}  alt="Issa Demirci" />
        <Divider />
        <List>
            {menuItems.map((lsItem, key) => (
                <ListItem button key={key} >
                    <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText} />
                </ListItem>
            ))}
        </List>
    </Box>
    )
    return (
        <>
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar}  alt="Issa Demirci" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} >
                        <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
        
        <Box>
            <AppBar position="static" style={{background: "#222" }}>
                <Toolbar>
                    <IconButton>
                        {/* <MuiThemeProvider theme={theme}> */}
                            {/* <Button> Retour </Button> Qui remplace ArrowBack */}
                            <ArrowBack style={{color: "tomato"}} />
                        {/* </MuiThemeProvider> */}
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}} > Portfolio </Typography>
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