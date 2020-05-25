import React, { useState } from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';

const Choice = (props) => {
  const { userList, userVal, getChoice } = props
  // list user
  const listUser = userList.map((val, index) => <option value={val} key={index}>{val} </option>)
  return (
    <NativeSelect
      value={userVal}
      onChange={getChoice}
      name="Who"
      style={{ marginTop: '40px' }}
    >
      <option value="">Choisissez</option>
      {listUser}
    </NativeSelect>


  )
}

export default Choice
