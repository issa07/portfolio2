import React, { Component } from 'react';
import * as emailjs from "emailjs-com";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';

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


const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",

    msgSent: "",
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    
    handleChange = (e) => {
        // this.setState({ [e.target.name]: e.target.value });

        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
            ? e.target.checked
            : e.target.value
        });
    };

    validate = () => {
        let nameError = "";
        let emailError = "";
        let messageError = "";
        // let msgSent = "";

        if (!this.state.name) {
            nameError = "Entrez votre nom !";
        } 
        if (!this.state.message) {
            messageError = "Entrez votre message !";
        } 
        if (!this.state.email.includes('@')) {
            emailError = "Email non valide";
        }
        if (emailError || nameError || messageError) {
            this.setState({ emailError, nameError, messageError });
            return false;
        }
        return true;
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        let msgSent = "";

        if (isValid) {
            // Emailjs used for send the values in account of gmail (contactmeportfolio01@gmail.com)
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

                
                // Initializ form
                this.setState(initialState);
                
                // console.log(this.state);
                msgSent = "Votre message a bien été envoyé. "
                this.setState({msgSent});
                return true;
        }
    };

    render() {
        const classes = this.props.classes;
        
        return (  
            <div>
                <Box component="div" className="bbody">
                    <Navbar />  
                    <Grid container justify="center" className="form">
                        <Box className={classes.form} >
                            {this.state.msgSent ? (
                                <div style={{fontSize: 20, color: "red"}} >
                                    {this.state.msgSent} 
                                </div> ): null }

                            <br />
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
                                onChange={this.handleChange}
                                // onChange={handleChange}
                                label="Name" 
                                variant="outlined" 
                                inputProps={{style: {color: "white"}}}
                                margin="dense" 
                                size="medium" />

                                {this.state.nameError ? (
                                <div style={{fontSize: 14, color: "red"}} >
                                    {this.state.nameError} 
                                </div> ): null }

                                <br />
                                <InputField 
                                className="inputField" 
                                fullWidth={true} 
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                // onChange={handleChange}
                                label="Email" 
                                variant="outlined" 
                                inputProps={{style: {color: "white"}}}
                                margin="dense" 
                                size="medium"/>

                                {this.state.emailError ? (
                                <div style={{fontSize: 14, color: "red"}} >
                                    {this.state.emailError} 
                                </div> ): null }

                                <br />
                                <InputField
                                className="inputField" 
                                multiline
                                rows={8}
                                fullWidth={true} 
                                id="message"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange}
                                // onChange={handleChange}
                                label="Message" 
                                variant="outlined" 
                                inputProps={{style: {color: "white"}}}
                                margin="dense" 
                                size="medium"
                                />

                                {this.state.messageError ? (
                                <div style={{fontSize: 14, color: "red"}} >
                                    {this.state.messageError} 
                                </div> ): null }

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
    // const { handleChange, values } = useForm();
    return (
        <Contact classes={classes}/>
    )
}

