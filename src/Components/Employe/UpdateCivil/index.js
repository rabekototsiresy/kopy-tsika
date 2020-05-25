import React from 'react'
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
const UpdateCivil = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log(props)
  return (

    <Grid item md={12} style={{padding: '20px'}}>
      <h1>METTRE A JOUR</h1>
      <Divider />
      <form noValidate autoComplete="off" style={{marginTop : '20px'}}>
      <Grid item md={12} container direction="row" spacing={2}>
        
        <Grid item>
        <TextField id="name" label="Nom" variant="outlined" />
        </Grid>
        <Grid item md={4}>
        <TextField id="firstName" label="Prénom" variant="outlined" style={{width: '100%'}} />
        </Grid>
        <Grid item>
        <TextField
    id="date"
    label="Date"
    type="date"
    defaultValue="2017-05-24"
 
    InputLabelProps={{
      shrink: true,
    }}
  />
        </Grid>
        <Grid item>
        <TextField id="lieu" label="Lieu de naissance" variant="outlined"  />
        </Grid>
        <Grid item md={6}>
        <TextField id="nomDuPere" label="Nom du pere" variant="outlined" style={{width: '100%'}}/>
      
        </Grid>
        <Grid item md={6}>
        <TextField id="nomMere-basic" label="Nom de la mère" variant="outlined" style={{width: '100%'}}/>
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" color="primary">
            METTRE A JOUR
          </Button>
        </Grid>
          
          
       
      </Grid>
      </form>
    </Grid>

  )
}

export default UpdateCivil
