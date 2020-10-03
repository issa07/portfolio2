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
import project1 from "../images/images/html-css-javascript-lg.jpg";
import project2 from "../images/images/html-css-javascript.jpg";

// import Particles from 'react-particles-js';
import Particles from "./Particle";


const useStyle = makeStyles({
    mainContainer: {
        // background: "#233",
        // height: "100%",
        position: "absolute",
        top: "8%",
        zIndex: 1,
    },
    cardContainer: {
        maxWidth: 400,
        // margin: "3rem",
        margin: "5rem auto",
        "&:hover": {
            transform: scale(1.2),
            transition: .3,
        }
    }
})

const Projets = () => {
    const classes = useStyle();
    return (
        <>
        <Box component="div" >
            <Navbar />
            <Particles />
            <Grid container justify="center"  className={classes.mainContainer}>


                {/* Projets 1 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="Projet 1" 
                            height="140" 
                            image={project1} 
                            // className="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Portfolio
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Vous êtes libres d’utiliser toutes les technologies de votre choix. Cependant, il est impératif que votre page
                                vitrine soit « Flat Design », « Responsive » et « One Page ». Vous trouverez de bonnes définitions à ces 3
                                termes en vous renseignant sur votre moteur de recherche favori.
                                Vous devez créer un menu pour faciliter la navigation sur votre site.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary" >
                                    Voir le Projet
                                </Button>
                            </i>
                            <Button size="small" color="primary">
                                Lien GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


                {/* Projets 2  */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project 2" 
                            height="140" 
                            image={project2} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Maquette resposive
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Le site doit être visible depuis un ordinateur, une tablette ou un téléphone. Les images doivent toujours être affichées à 100%. C’est à dire que vous devez prévoir des images hautes et basses définitions. Le redimensionnement du navigateur (de manière à émuler un autre périphérique) doit par conséquent influer sur l’URL des images affichées.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary">
                                 Voir le Projet
                                </Button>
                            </i>
                            <Button size="small" color="primary">
                                Lien GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Projet 3 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project 3" 
                            height="140" 
                            image={project2} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    e-commerce
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Le site doit être visible depuis un ordinateur, une tablette ou un téléphone. Les images doivent toujours être affichées à 100%. C’est à dire que vous devez prévoir des images hautes et basses définitions. Le redimensionnement du navigateur (de manière à émuler un autre périphérique) doit par conséquent influer sur l’URL des images affichées.
                                </Typography>
                            </CardContent>
                        </CardActionArea>  
                        <CardActions>
                        <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary">
                                    Voir le Projet
                                </Button>
                            </i>
                            <Button size="small" color="primary">
                                Lien GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Projet 4 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project 4" 
                            height="140" 
                            image={project1} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Le site doit être visible depuis un ordinateur, une tablette ou un téléphone. Les images doivent toujours être affichées à 100%. C’est à dire que vous devez prévoir des images hautes et basses définitions. Le redimensionnement du navigateur (de manière à émuler un autre périphérique) doit par conséquent influer sur l’URL des images affichées.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <i className="fas fa-plus-circle" >
                                <Button size="small" color="primary">
                                    Voir le Projet
                                </Button>
                            </i>
                            <Button size="small" color="primary">
                                Lien GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

export default Projets;