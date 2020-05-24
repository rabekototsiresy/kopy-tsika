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
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
const useStyles = makeStyles((theme) => ({
  main: {
    padding: '100px',
    

  },

  
}));


const Sign = () => {
  const classes = useStyles();
  return (
   
    <Grid item md={12} style={{padding: '20px'}}>
    <h1>SIGNER</h1>
    <Divider />
    
    <Divider />
    <Grid item md={12}>
    <IconButton color="primary"  aria-label="add to shopping cart">
              <PrintOutlinedIcon fontSize="large"  />
   </IconButton>
   <IconButton color="primary"  aria-label="add to shopping cart">
              <CloudUploadOutlinedIcon fontSize="large" />
   </IconButton>
   <Link to='/employe/request-list' style={{textDecoration: 'none'}}>
   <Button variant="contained" color="primary">
    VALIDER
   </Button>
   </Link>
    </Grid>
  </Grid>

      
    
  )
}

export default Sign
