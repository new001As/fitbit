import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import image1 from '../../images/cover_image-1.jpg'
import './main.css'
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpeg';
import image4 from '../../images/image4.jpg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Welcome to Fitbit : A revolution towards Fitness
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <img src={image1} className="image-center"></img>
            <Typography variant="h5" align="center" color="textSecondary" className="paragraph" paragraph>
            Tired of your old fitness routine? You’re not alone. Millions of people are stepping away from grinding, unimaginative regimens in search of new, exciting ways to get into shape, tune in to Fitbit to boost your Fitness Regime.
            </Typography>
            <div className={classes.heroButtons} className="buttons">
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                <Link to="/posts" style={{textDecoration: "none"}}>
                  <Button variant="contained" color="primary">
                   Post Reciepes
                  </Button>
                  </Link>
                </Grid>
                <Grid item>
                <Link to="/recipes" style={{textDecoration: "none"}}>
                  <Button variant="outlined" color="primary">
                    Explore Recipes
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
              <Grid item xs={12} sm={6} md={4}>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image2}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Post your own Reciepes
                    </Typography>
                    <Typography variant="h6"color="textSecondary" paragraph>
                      Showcase your cooking skils by some intresting and delicious new reciepes or posting some recipes that you found absolutely delicious.
                    </Typography>
                  </CardContent>
                  <CardActions className="buttoncentre">
                  <Link to="/posts" style={{textDecoration: "none"}}>
                  <Button variant="contained" color="primary" >
                   Post Reciepes
                  </Button>
                  </Link>
                  </CardActions>
                 </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image3}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Explore New Recipes
                    </Typography>
                    <Typography variant="h6"color="textSecondary" paragraph>
                    Whether you need an appetizer or a dessert , we have menu inspiration that will satisfy your patrons with great taste and variety.
                    </Typography>
                  </CardContent>
                  <CardActions className="buttoncentre">
                  <Link to="/recipes" style={{textDecoration: "none"}}>
                  <Button variant="contained" color="primary" >
                   Explore Reciepes
                  </Button>
                  </Link>
                  </CardActions>
                </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                   
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image4}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Track tour Calorie Intake
                    </Typography>
                    <Typography variant="h6"color="textSecondary" paragraph>
                      Keep your Diet in Check by tracking your calorie intake through regular intervals to maintain your maintainance calories. 
                    </Typography>
                  </CardContent>
                  <CardActions className="buttoncentre">
                  <Link to="/diet" style={{textDecoration: "none"}}>
                  <Button variant="contained" color="primary" >
                   Monitor your Diet
                  </Button>
                  </Link>
                  </CardActions>
                </Card>
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}