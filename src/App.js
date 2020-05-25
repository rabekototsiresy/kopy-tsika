import React,{useState,Fragment,useEffect} from 'react'
import { BrowserRouter, Route, Switch,Link ,Redirect} from 'react-router-dom'
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
  useEffect(() => {
    console.log("APP"+sessionStorage.getItem('category'))
  })

  const classes = useStyles();
const listEmp = [
  {
    description: 'Register Civil',
    link: '/employe/register-civil'
  },
  {
    description: 'Search civil',
    link: '/employe/search-civil'
  },
  {
    description: 'Register Employe',
    link: '/employe/register-employe'
  },
  {
    description: 'List Employe',
    link: '/employe/employe-list'
  },
  {
    description: 'Liste Demande',
    link: '/employe/request-list'
  }
]
const listCiv = [
  {
    description: 'Faire Demande',
    link: '/civil/do-request'
  },
  {
    description: 'Liste Demande',
    link: '/civil/request-list'
  }
]
const [listNavEmploye,setListNavEmploye ] = useState(listEmp)
const [listNavCivil, setlistCiv] = useState(listCiv)

const displayNavEmploye = listNavEmploye.map( (nav,index)=>(
<Fragment key={index}>
<Link to={`${nav.link}`} style={{textDecoration: 'none'}}>
                <Grid className={classes.link}>
                  {nav.description}
              </Grid>
              </Link>
              <Divider />
</Fragment>
))

const displayNavCivil = listNavCivil.map( (nav,index)=>(
  <Fragment key={index}>
  <Link to={`${nav.link}`} style={{textDecoration: 'none'}}>
                  <Grid className={classes.link}>
                    {nav.description}
                </Grid>
                </Link>
                <Divider />
  </Fragment>
  ))
  
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
            style={{marginTop: '65px'}}
            // alignItems="center"
          >
            <Grid item md={2} className={classes.main} container
              direction="column"
              justify="flex-start"
              
              
            >
              
              {sessionStorage.getItem('category') == 'employe' ? displayNavEmploye : displayNavCivil }


            </Grid>

            <Grid item md={10} container  direction="column"  >
              <Route path="/employe/register-civil" component={AddBirth} />
              <Route path="/employe/search-civil" component={Search} />
              <Route path="/employe/update-civil/:idDoc" component={UpdateCivil} />
              <Route path="/employe/register-employe" component={AddEmploye} />
              <Route path="/employe/employe-list" component={ListEmploye} />
              <Route path="/employe/update-employe/:idDoc" component={UpdateEmploye} />
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
