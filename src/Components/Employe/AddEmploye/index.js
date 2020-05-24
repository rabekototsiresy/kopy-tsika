import React from 'react'
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
const useStyles = makeStyles((theme) => ({
  main: {
    padding: '100px',
    

  },

  
}));


const AddEmploye = () => {
  const classes = useStyles();
  return (
   
    <Grid item md={12} style={{padding: '20px'}}>
    <h1>Register Employe</h1>
    <Divider />
    <form noValidate autoComplete="off" style={{margin : '20px'}}>
    <Grid item md={12}  container direction="column" spacing={2} justify="center" alignItems="center">
    <Grid item md={12} style={{width: '100%'}}>
      <TextField id="name" label="Nom Complet" variant="outlined"  style={{width: '100%'}} />
      </Grid>
      <Grid item >
      <TextField id="name" label="username" variant="outlined" />
      </Grid>
      <Grid item>
      <TextField id="name" label="Password" variant="outlined" />
      </Grid>
      <Grid item md={12} style={{textAlign: 'center'}}>
        <Button variant="contained" color="primary">
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
