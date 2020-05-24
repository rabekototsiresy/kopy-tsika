import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Employe from './Employe';
import Civil from './Civil';
import Choice from './Choice';






const Login = () => {

  const [userList, setUser] = useState(['civil', 'employe'])
  const [userVal, setUserVal] = useState('')

  // get user selected
  const getChoice = e => {
    setUserVal(e.target.value)
    console.log(e.target.value)
  }

  //get Form Login

  const componentDisplayed = userVal == 'civil' ? <Civil /> : <Employe />

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{marginTop: '50px'}}
    >


      <Choice
        userList={userList}
        userVal={userVal}
        getChoice={getChoice}
      />

      {componentDisplayed}

    </Grid>
  )
}

export default Login
