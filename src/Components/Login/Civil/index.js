import React, { Fragment,useState,useContext } from 'react'
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

const Civil = (props) => {
  const classes = useStyles();

  const [userId, setUserId] = useState('')
  const [error, setError] = useState(false)
  const firebase = useContext(FirebaseContext)


  

  const handleUid = e=>{
    setUserId(e.target.value)
  }
 
  const handleSubmit = e=>{
    console.log("handleSumbit")
    e.preventDefault()
    firebase.getUser("Civil")
    .then((collection) => {
      if (collection) {
        let tabTemp = []
        collection.docs.map(doc => tabTemp.push(doc.data()))
        if(tabTemp !== 0){
          const auth = tabTemp.filter( user=> user.id == userId )
          console.log(auth)
          if(auth.length !== 0){
            setError(false)
            sessionStorage.setItem("category", "civil");
            window.location.href = "/civil/do-request";
            //props.props.history.push('/civil/civil/do-request')
          }else{
            setError(true)
           setUserId('')
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
      ID introuvable  
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
            id="outlined-basic" 
            type='text' 
            label="ID" 
            variant="outlined" 
            className={`${classes.TextField} ${classes.TextFieldCenter}`} 
            onChange={handleUid}
            value={userId}
            />
            <Button 
            variant="contained" 
            color="primary"
            type='submit'
            >
              Log in
            </Button>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Civil
