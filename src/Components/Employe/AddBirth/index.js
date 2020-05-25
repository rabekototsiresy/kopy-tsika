import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const AddBirth = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


const data = {
  firstName: '',
  lastName: '',
  birth: '',
  at: '',
  dadName: '',
  momName: ''
}

const [informations, setInformations] = useState(data)
const handleChange= e=>{
  setInformations({...informations,[e.target.id]: e.target.value})
}
const {firstName,lastName,birth,at,dadName,momName}  = informations
  return (

    <Grid item md={12} style={{padding: '20px'}}>
      <h1>AJOUT NEE</h1>
      <Divider />
      <form noValidate autoComplete="off" style={{marginTop : '20px'}}>
      <Grid item md={12} container direction="row" spacing={2}>
        
        <Grid item>
        <TextField 
        id="firstName" 
        label="Nom" 
        variant="outlined" 
        onChange={handleChange}
        value={firstName}
        />
        </Grid>
        <Grid item md={4}>
        <TextField 
        onChange={handleChange}
        id="lastName" 
        label="Prénom" 
        variant="outlined" 
        style={{width: '100%'}}
        id="lastName"  
        value={lastName}
        />
        </Grid>
        <Grid item>
        <TextField
        onChange={handleChange}
          id="birth"
          label="Date"
          type="date"
          value={birth}
      
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item>
        <TextField 
        onChange={handleChange}
        id="at" 
        label="Lieu de naissance"
        variant="outlined" 
        value={at} 
        />
        </Grid>
        <Grid item md={6}>
        <TextField 
        onChange={handleChange}
        id="dadName" 
        label="Nom du pere" 
        variant="outlined" 
        style={{width: '100%'}}
        value={dadName}

        />
      
        </Grid>
        <Grid item md={6}>
        <TextField 
        onChange={handleChange}
        id="momName" 
        label="Nom de la mère" 
        variant="outlined" 
        style={{width: '100%'}}
        value={momName}
        />
        </Grid>
        <Grid item md={12}>
          <Button 
          variant="contained" 
          color="primary"
          >
            Enregistrer
          </Button>
        </Grid>
          
          
       
      </Grid>
      </form>
    </Grid>

  )
}

export default AddBirth
