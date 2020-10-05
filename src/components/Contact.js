import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box, TextareaAutosize} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';
import { Translate } from "@material-ui/icons";

// Méthode 1: (
// Pour utiliser la méthode 1, 
// il faut appeler la const de "useStyles" dans la const "Contact" => 'const classes = useStyles()' 
// puis appeler la "classes" dans className. Ex: => className={classes.(le nom de classe) dans notre cas c'est "root"})
// const useStyles = makeStyles({
//     root: {
//         "& label.Mui-focused": {
//             color: "tomato",
//         },
//     },
// });

const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    bouton: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato",
    },
}));


// Méthode 2:
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan",
            },
        },
    },
})(TextField);

const Contact = () => {

    // Méthodes 1:
    const classes = useStyles(); 

    return (
        <Box component="div">
            <Navbar />  
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" className="contactez-moi">
                        Contactez-moi...
                    </Typography>
                    {/* <TextField: Méthode 1: */}
                    {/* <TextField 
                        className={classes.root} 
                        fullWidth={true} id="outlined-basic" 
                        label="Outlined" variant="outlined">
                    </TextField>   */}
                    <InputField 
                    className="inputField" 
                    fullWidth={true} 
                    label="Name" 
                    variant="outlined" 
                    inputProps={{style: {color: "white"}}}
                    margin="dense" 
                    size="medium" />

                    <br />
                    <InputField 
                    className="inputField" 
                    fullWidth={true} 
                    label="Email" 
                    variant="outlined" 
                    inputProps={{style: {color: "white"}}}
                    margin="dense" 
                    size="medium"/>

                    <br />
                    <InputField
                    className="inputField" 
                    multiline
                    rows={8}
                    fullWidth={true} 
                    label="Message" 
                    variant="outlined" 
                    inputProps={{style: {color: "white", width: "350px"}}}
                    margin="dense" 
                    size="medium"
                    />

                    <br />
                    {/* <TextarArea
                    rowsMin={8}
                    className={classes.area} 
                    placeholder="Votre message"
                    fullWidth={true} 
                    label="Message" 
                    variant="outlined" 
                    // inputProps={{style: {color: "white", height: "100px"}}}
                    margin="dense" 
                    size="medium"
                    /> */}

                    <br />
                    <Button className={classes.bouton} variant="outlined" fullWidth={true} endIcon={<SendIcon />} >
                        Envoyez
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contact;