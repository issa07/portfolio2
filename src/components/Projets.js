import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import Particles from "./Particle";
import reactjs from "../images/images/react_sass.png";
import project2 from "../images/images/laravel.png";
import htmlcss from "../images/images/htmlcss.png";
import reactUI from "../images/images/react_materialUI.png"



const useStyle = makeStyles((theme)=>({
    mainContainer: {
        position: "absolute",
        top: "8%",
        zIndex: 1,
    },

    // Remplacé par les scss donc celui ci est inutile
    // cardContainer: {
    //     maxWidth: 400,
    //     // margin: "3rem",
    //     margin: "5rem auto",
    // }
}));

const Projets = () => {
    const classes = useStyle();
    return (
        <>
        <Box component="div" >
            <Navbar />
            <Particles />
            <Grid container justify="center"  className={classes.mainContainer}>


                {/* Projets 1 */}
                <Grid item xs={12} sm={8} md={6}  >
                    <Card className="projets">
                        <CardActionArea >
                            <CardMedia 
                            component="img" 
                            alt="Projet 1" 
                            height="160" 
                            image={reactjs} 
                            className="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Portfolio
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Il s'agit d'un site de portfolio qu'il fallait faire en Reactjs. <br />
                                <strong>React + Sass</strong>                                
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://issa07.github.io/portfolio/" target="__bank">
                            <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary" >
                                    Voir le Projet
                                </Button>
                            </i>
                            </a>
                            <a href="https://github.com/issa07/portfolio" target="__bank">
                                <Button size="small" color="primary">
                                    Lien GitHub
                                </Button>
                            </a>  
                        </CardActions>
                    </Card>
                </Grid>


                {/* Projet 2 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className="projets">
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project 3" 
                            height="160" 
                            image={project2} 
                            // className="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    E-commerce
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Il s'agit d'un site de e-commerce à réaliser avec le Framework de Laravel
                                </Typography>
                            </CardContent>
                        </CardActionArea>  
                        <CardActions>
                        <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary">
                                    Voir le Projet
                                </Button>
                            </i>
                            <a href="https://github.com/issa07/e-commerce" target="__bank">
                                <Button size="small" color="primary">
                                    Lien GitHub
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </Grid>


                {/* Projets 3  */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className="projets">
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project 2" 
                            height="160" 
                            image={htmlcss} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Maquette responsive
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Il s'agit d'une maquette responsive qui est adapté aux PC, tablettes et téléphone portable. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="www.google.com" target="__bank">
                            <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary">
                                 Voir le Projet
                                </Button>
                            </i>
                            </a>
                            <a href="https://github.com/issa07/maquette-responsive" target="__bank">
                                <Button size="small" color="primary">
                                    Lien GitHub
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </Grid>


                {/* Projet 4 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className="projets">
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project 4" 
                            height="160" 
                            image={reactUI} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Portfolio 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong style={{color: "tomato"}} >C'est le site actuel </strong> <br />
                                    Il s'agit d'un deuxième site de portfolio personnel que j'ai fait, 
                                    l'histoire d'être familiarisé avec Reactjs. <br />
                                    <strong>React + Material UI </strong>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary">
                                    Voir le Projet
                                </Button>
                            </i>
                            <a href="https://github.com/issa07/portfolio2" target="__bank">
                                <Button size="small" color="primary">
                                    Lien GitHub
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

export default Projets;