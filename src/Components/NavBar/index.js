import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { AiOutlineLogout } from 'react-icons/ai'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar =  (props)=> {


  useEffect( ()=>{
    console.log("ajout nouveau né USEEFFECT")
    if(sessionStorage.getItem('category')){
      console.log(sessionStorage.getItem('category'))
    }else{
      props.history.push('/')
    }
  },[])
  const classes = useStyles();
  const logOut = ()=>{
    sessionStorage.removeItem("category");
    props.history.push('/')
  }
  const logOutDisplay = sessionStorage.getItem('category') && (
    <Button color="white" style={{ float: 'right' }} onClick={logOut} >
    <Typography style={{color: '#fff',padding: '0 10px'}}>
            {sessionStorage.getItem('category')}   
          </Typography> 
    <AiOutlineLogout color="#fff" size="20px" />
  </Button>
  )
  return (
    
    <AppBar position="fixed" >
      <Toolbar>
        <Grid container>
          <Grid item md={5}>
            <Typography variant="h5" >
              KOPY-TSIKA
            </Typography>
          </Grid>
          <Grid item md={5} />
          <Grid item md={2}>
           
          {logOutDisplay}

          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar