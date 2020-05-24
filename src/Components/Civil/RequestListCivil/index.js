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
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
const useStyles = makeStyles((theme) => ({
  main: {
    padding: '100px',
    

  },

  
}));


const RequestListCivil = () => {
  const classes = useStyles();
  return (
   
    <Grid item md={12} style={{padding: '20px'}}>
    <h1>LISTE DES DEMANDE FAITES</h1>
    <Divider />
    
    <Divider />
    <Grid item md={12}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>

            <TableCell >ID </TableCell>
            <TableCell >NOM</TableCell>
            <TableCell>PRENOM</TableCell>
            <TableCell>LIEU DE NAISSANCE</TableCell>
            <TableCell>DATE DU DEMANDE</TableCell>
            <TableCell>NOMBRE COPIE</TableCell>
          
            
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell >XS5D</TableCell>
            <TableCell >RABEKOTO </TableCell>
            <TableCell >TSIRESY NY RIANA</TableCell>
            <TableCell >ANTSIRABE II </TableCell>
            <TableCell >12/01/2020</TableCell>
            <TableCell >03</TableCell>
             
            </TableRow>
         
       
        </TableBody>
      </Table>
      </Grid>
  </Grid>

      
    
  )
}

export default RequestListCivil
