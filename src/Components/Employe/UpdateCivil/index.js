import React,{useContext,useState,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {FirebaseContext} from '../../Firebase'
import {Link} from 'react-router-dom'
const UpdateCivil = (props) => {
  const [informations, setInformations] = useState({})
  const data = {
    firstName: '',
    lastName: '',
    birth: '',
    at: '',
    dadName: '',
    momName: '',
  
  }


  
  useEffect( ()=>{
    const idDoc = props.match.params.idDoc
    firebase.getUserByIdDoc("Civil",idDoc)
    .then((collection) => {
      if (collection) {
        setInformations(collection.data())
        console.log(informations)
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

const handleSumbit = (e)=>{
  e.preventDefault()
  const idDoc = props.match.params.idDoc
  firebase.updateUser(informations,'Civil',idDoc)
  .then( user=>{
    alert("CIVIL UPDATED SUCCEFUL ")
    setInformations(data)
    props.history.push('/employe/search-civil')
    
  })
  .catch( err=>{
    alert('une erreur s\'est produite')
    setInformations(data)
  })
}
const {firstName,lastName,birth,at,dadName,momName}  = informations


  return (

    <Grid item md={12} style={{padding: '20px'}}>
      <h1>METTRE A JOUR</h1>
      <Divider />
      <form 
      noValidate 
      autoComplete="off" 
      style={{marginTop : '20px'}}
      onSubmit={handleSumbit}
      >
      <Grid item md={12} container direction="row" spacing={2}>
        
        <Grid item>
        <TextField 
        id="firstName" 
        label="Nom" 
        variant="outlined" 
       
        defaultValue=" "
        value={firstName}
        onChange={handleChange}
        />
        </Grid>
        <Grid item md={4}>
        <TextField 
        id="lastName" 
        label="Prénom" 
        variant="outlined" 
        style={{width: '100%'}}
        value={lastName}
        defaultValue=" "
        onChange={handleChange}
        />
        </Grid>
        <Grid item>
        <TextField
        id="birth"
     
        type="date"
        value={birth}
        defaultValue=" "
        onChange={handleChange}
 
        />
        </Grid>
        <Grid item>
        <TextField 
        id="at" 
        label="Lieu de naissance" 
        variant="outlined"  
        value={at}
        defaultValue=" "
        onChange={handleChange}
        />
        </Grid>
        <Grid item md={6}>
        <TextField 
        id="dadName" 
        label="Nom du pere" 
        variant="outlined" 
        style={{width: '100%'}}
        value={dadName}
        defaultValue=" "
        onChange={handleChange}
        />
      
        </Grid>
        <Grid item md={6}>
        <TextField 
        id="momName" 
        label="Nom de la mère" 
        variant="outlined" 
        style={{width: '100%'}}
        value={momName}
        defaultValue=" "
        onChange={handleChange}
        />
        </Grid>
        <Grid item md={12}>
          
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
    </Grid>

  )
}

export default UpdateCivil
