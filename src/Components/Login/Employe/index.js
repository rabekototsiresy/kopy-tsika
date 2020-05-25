import React, { Fragment,useState,useContext,useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {FirebaseContext} from './../../Firebase'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  loginCivil: {
    border: '2px solid #3f51b5',
    borderRadius: '10px',
    width: '30%',
    marginTop: '30px',
    padding: '20px'
  },
  TextField: {
    width: '100%'
  },
  TextFieldCenter: {
    margin: '20px 0'
  },
  form: {
    marginTop: '20px'
  }
}));


const Employe = (props) => {
 
  const classes = useStyles();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const firebase = useContext(FirebaseContext)


  

  const handleUsername = e=>{
    setUsername(e.target.value)
  }
  const handlePassword = e=>{
    setPassword(e.target.value)
  }
  const handleSubmit = e=>{
    e.preventDefault()
    firebase.getUser("Employe")
    .then((collection) => {
      if (collection) {
        let tabTemp = []
        collection.docs.map(doc => tabTemp.push(doc.data()))
        if(tabTemp !== 0){
          const auth = tabTemp.filter( user=> user.username == username && user.password === password)
          console.log(auth)
          if(auth.length !== 0){
            setError(false)
            sessionStorage.setItem("category", "employe");
            window.location.href = "/employe/register-civil";
            // props.props.history.push('/employe/register-civil')
          }else{
            setError(true)
            setPassword('')
            setUsername('')
            console.log("User not found")
          }
        }
      } else {
        setError(true)
        console.log(" Collection not foud une erreur est survenu")
      }
    })
    .catch( err=>{
      console.log(" une erreur est survenu")
    })
    // console.log(username)
    // console.log(password)
  }
  const errorDisplay = error && (
    <Alert variant="outlined" severity="error" style={{marginTop: '20px'}}>
      Pseudo ou mot de passe introuvable    
    </Alert>
  )
  return (
    <Fragment>
      {errorDisplay}
      <Grid item className={classes.loginCivil}>
      
        <Typography variant="h4" gutterBottom>
          Login
      </Typography>
        <Divider />

        <Grid>
          <form 
          className={classes.form} 
          noValidate 
          autoComplete="off"
          onSubmit={handleSubmit}
          >
            <TextField 
            id="username" 
            type='text' 
            label="Username" 
            variant="outlined" 
            className={classes.TextField} 
            onChange={handleUsername}
            value={username}
            />
            <TextField 
            id="password" 
            type='password' 
            label="Password" 
            variant="outlined" 
            className={`${classes.TextField} ${classes.TextFieldCenter}`}
            onChange={handlePassword} 
            value={password}
            />
            <Button 
            variant="contained" 
            color="primary"
            type="submit"
            >
              Log in
            </Button>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Employe
