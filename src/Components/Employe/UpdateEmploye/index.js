import React,{useContext,useState,useEffect} from 'react'
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


const UpdateEmploye = (props) => {
  const classes = useStyles();
  const [informations, setInformations] = useState({})
  const data = {
    fullName: '',
    username: ''
  }


  
  useEffect( ()=>{
    const idDoc = props.match.params.idDoc

    firebase.getUserByIdDoc("Employe",idDoc)
    .then((collection) => {
      if (collection) {
        setInformations(collection.data())
        
      } else {
      
        console.log(" Collection not foud une erreur est survenu")
      }
    })
    .catch( err=>{
      console.log(" une erreur est survenu")
    })
  
  
  
  },[])
 
 
  const firebase = useContext(FirebaseContext)
  
const handleChange= e=>{
  setInformations({...informations,[e.target.id]: e.target.value})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  const idDoc = props.match.params.idDoc
  firebase.updateUser(informations,'Employe',idDoc)
  .then( user=>{
    alert("EMPLOYE UPDATED SUCCEFUL ")
    setInformations(data)
    props.history.push('/employe/employe-list')
    
  })
  .catch( err=>{
    alert('une erreur s\'est produite')
    setInformations(data)
  })
}
 const {fullName,username}  = informations && informations

  return (
   
    <Grid item md={12} style={{padding: '20px'}}>
    <h1>METTRE A JOUR</h1>
    <Divider />
    <form 
    noValidate 
    autoComplete="off" 
    style={{margin : '20px'}}
    onSubmit={handleSubmit}
    >
    <Grid item md={12} container direction="column" spacing={2} justify="center" alignItems="center">
    <Grid item md={12} style={{width: '100%'}}>
      <TextField 
      id="fullName" 
      label="Nom Complet" 
      variant="outlined"
       style={{width: '100%'}} 
        value={fullName}
       defaultValue=" " 
       onChange={handleChange}
       />
      </Grid>
      <Grid item>
      <TextField 
      id="username" 
      label="username" 
      variant="outlined" 
       value={username}
      defaultValue=" "
      onChange={handleChange}
      />
      </Grid>
     
      <Grid item md={12} style={{textAlign: 'center'}}>
        <Button 
        variant="contained" 
        color="primary"
        type="submit"
        >
           METTRE A JOUR
        </Button>
      </Grid>
    </Grid>
    </form>
    <Divider />
  
  </Grid>

      
    
  )
}

export default React.memo(UpdateEmploye)
