import React from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Search from './Components/Employe/Search';
import { makeStyles } from '@material-ui/core/styles';
import AddBirth from './Components/Employe/AddBirth';
import UpdateCivil from './Components/Employe/UpdateCivil';
import AddEmploye from './Components/Employe/AddEmploye';
import ListEmploye from './Components/Employe/ListEmploye';
import UpdateEmploye from './Components/Employe/UpdateEmploye';
import RequestList from './Components/Employe/RequestList';
import Sign from './Components/Employe/Sign';
import DoRequest from './Components/Civil/DoRequest';
import RequestListCivil from './Components/Civil/RequestListCivil';


const useStyles = makeStyles((theme) => ({
  main: {
    borderRight: '2px solid #dddd',
    height: '100vh'

  },
  link: {
    // border: '2px solid black',
    padding: '20px 50px',
    
    

  }
  
}));



const App = () => {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Login} />



          <Grid
            container
            direction="row"
            justify="flex-start"
            style={{marginTop: '50px'}}
            // alignItems="center"
          >
            <Grid item md={2} className={classes.main} container
              direction="column"
              justify="flex-start"
              
              
            >
              <Link to="/employe/register-civil" style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                  Register Civil
              </Grid>
              </Link>
              <Divider />
              <Link to="/employe/search-civil" style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                  Search civil
                </Grid>
              </Link>
              <Divider />
              <Link to="/employe/register-employe" style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                Register Employe
                </Grid>
              </Link>
              <Divider />
              <Link to="/employe/employe-list" style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                List Employe
                </Grid>
              </Link>
              <Divider />
              <Link to="/employe/request-list" style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                Liste Demande
                </Grid>
              </Link>
              <Divider />
              <Link to="/civil/do-request" style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                Faire Demande
                </Grid>
              </Link>
              <Divider />
              <Link to="/civil/request-list" style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                Liste Demande
                </Grid>
              </Link>
              <Divider />


            </Grid>

            <Grid item md={10} container  direction="column"  >
              <Route path="/employe/register-civil" component={AddBirth} />
              <Route path="/employe/search-civil" component={Search} />
              <Route path="/employe/update-civil" component={UpdateCivil} />
              <Route path="/employe/register-employe" component={AddEmploye} />
              <Route path="/employe/employe-list" component={ListEmploye} />
              <Route path="/employe/update-employe" component={UpdateEmploye} />
              <Route path="/employe/request-list" component={RequestList} />
              <Route path="/employe/sign" component={Sign} />
              <Route path="/civil/do-request" component={DoRequest} />
              <Route path="/civil/request-list" component={RequestListCivil} />
              
            </Grid>
          </Grid>


         
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
