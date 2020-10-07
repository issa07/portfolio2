import React, { Component } from 'react';
import * as emailjs from "emailjs-com";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';


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
    messageSent: {
        color: "red",
    }
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


// const formValid = formErrors => {
//     let valid = true;

//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false)
//     });
//     return valid;
// }

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            // formErrors: {
            //     name: "",
            //     email: "",
            //     message: ""
            // }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        // if (formValid(this.state.formErrors)) {
        //     console.log("Validé");
        // }
        emailjs
        .sendForm(
            "gmail",
            "portfolio",
            "#formulaire",
            "user_fQbOW4rJWmlEK6hFAGLdm"            
        )
        .then()
        .catch();
        this.setState({
            name: "",
            email: "",
            message: "",
        });

        // let msg = document.querySelector(".form");
        // if(!!this.handleSubmit.bind(this)) {
        //     console.log("les champs ne sont pas remplis")
        // }
        // else {
        //     msg.innerHTML = "<h1> Votre message bien a été envoyé </h1>";
        // }
       
    };

    render() {
        const classes = this.props.classes;
        return (  
            <div>
                <Box component="div" className="bbody">
                    <Navbar />  
                    <Grid container justify="center" className="form">
                        <Box className={classes.form} >
                            <Typography variant="h5" className="contactez-moi">
                                Contactez-moi...
                            </Typography>
                            <form
                            onSubmit={this.handleSubmit.bind(this)}
                            id="formulaire">

                                <InputField 
                                className="inputField" 
                                fullWidth={true} 
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                                label="Name" 
                                variant="outlined" 
                                inputProps={{style: {color: "white"}}}
                                margin="dense" 
                                size="medium" />

                                <br />
                                <InputField 
                                className="inputField" 
                                fullWidth={true} 
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
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
                                id="message"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this)}
                                label="Message" 
                                variant="outlined" 
                                inputProps={{style: {color: "white"}}}
                                margin="dense" 
                                size="medium"
                                />

                                <br />
                                <Button 
                                className={classes.bouton} 
                                variant="outlined" 
                                fullWidth={true} 
                                endIcon={<SendIcon />} 
                                // onSubmit={this.handleSubmit.bind(this)}
                                type="submit"
                                >
                                Envoyez
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Box>
            </div>
        )
    }
}


export default () => {
    const classes = useStyles();
    return (
        <Contact classes={classes} />
    )
}

