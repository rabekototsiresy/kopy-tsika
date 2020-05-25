import React,{useState,useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import {FirebaseContext} from '../../Firebase'
const useStyles = makeStyles((theme) => ({
  main: {
    padding: '100px',
    

  },

  
}));


const AddEmploye = () => {

  const classes = useStyles();
  const data = {
    fullName: '',
    username: '',
    password: ''
  }
  const [informations, setInformations] = useState(data)
  const firebase = useContext(FirebaseContext)


  const handleChange = e=>{
    setInformations({...informations,[e.target.id]: e.target.value })
  }
  const handleSubmit = e=>{
    e.preventDefault()
    firebase.createEmploye(informations)
    .then( success=>{
      alert("EMPLOYE ADDED SUCCEFUL")
      setInformations(data)
    })
    .catch( err=>{
      alert("Une erreur s'est produite")
      setInformations(data)
    })
    //console.log(informations)
  }
  const {fullName,username,password}=  informations
  return (
   
    <Grid item md={12} style={{padding: '20px'}}>
    <h1>Register Employe</h1>
    <Divider />
    <form 
    noValidate 
    autoComplete="off" 
    style={{margin : '20px'}}
    onSubmit={handleSubmit}
    >
    <Grid item md={12}  container direction="column" spacing={2} justify="center" alignItems="center">
    <Grid item md={12} style={{width: '100%'}}>
      <TextField 
      id="fullName" 
      label="Nom Complet" 
      variant="outlined"  
      style={{width: '100%'}}
      onChange={handleChange}
      value={fullName}
       />
      </Grid>
      <Grid item >
      <TextField 
      id="username"
      label="username" 
      variant="outlined"
      onChange={handleChange}
      value={username} 
      />
      </Grid>
      <Grid item>
      <TextField 
      id="password" 
      label="Password" 
      variant="outlined" 
      type="password"
      onChange={handleChange}
      value={password}
      />
      </Grid>
      <Grid item md={12} style={{textAlign: 'center'}}>
        <Button 
        variant="contained" 
        color="primary"
        type="submit"
        >
          Register
        </Button>
      </Grid>
    </Grid>
    </form>
    <Divider />
  
  </Grid>

      
    
  )
}

export default AddEmploye
