import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



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

const Employe = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item className={classes.loginCivil}>
        <Typography variant="h4" gutterBottom>
          Login
      </Typography>
        <Divider />

        <Grid>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="username" type='text' label="Username" variant="outlined" className={classes.TextField} />
            <TextField id="password" type='password' label="Password" variant="outlined" className={`${classes.TextField} ${classes.TextFieldCenter}`} />
            <Button variant="contained" color="primary">
              Log in
            </Button>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Employe
