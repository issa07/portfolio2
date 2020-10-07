import React, { Component } from 'react';
import * as emailjs from "emailjs-com";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box, FormControl, Input} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';



class Contacter extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            email: "",
            message: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }




    render() {
        return (
            <Box component="div" className="bbody">
                <Navbar />  
                <Grid container justify="center" className="form">
                    <Box component="form" className={classes.form} >
                        <Typography variant="h5" className="contactez-moi">
                            Contactez-moi...
                        </Typography>
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
                    </Box>
                </Grid>
            </Box>
        );
    };
}



<form
                onSubmit={this.handleSubmit.bind(this)}
                id="formulairezoro">

                <div>
                    <label>Name: </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    ></input>
                </div>
                    <label>email: </label>
                    <input 
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    ></input>

                    <label>message: </label>
                    <input 
                    type="text"
                    id="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    ></input>

                    <input type="submit"></input>
                </form>






export default Contacter;