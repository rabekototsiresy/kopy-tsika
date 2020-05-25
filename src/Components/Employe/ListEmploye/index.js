import React, { useContext, useState, useEffect } from 'react'
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
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase'
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
  main: {
    padding: '100px',

  },

}));


const ListEmploye = () => {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext)
  const [listEmploye, setListEmploye] = useState([])
  const [data, setData] = useState('')

  useEffect(() => {
    firebase.getUser("Employe")
      .then((collection) => {
        if (collection) {
          let tabTemp = []
          collection.docs.map(doc => {
            tabTemp.push({ info: doc.data(), idDoc: doc.id })
          })

          setListEmploye(tabTemp)
        } else {
          // setError(true)
          console.log(" Collection not foud une erreur est survenu")
        }
      })
      .catch(err => {
        console.log(" une erreur est survenu")
      })
  }, [listEmploye])

  const displayListEmploye = listEmploye.length !== 0 ? (
    listEmploye.map((user, index) => {
      return (
        <TableRow>
          <TableCell >{user.info.fullName}</TableCell>
          <TableCell >{user.info.username}</TableCell>
          <TableCell >
            <Link to={`/employe/update-employe/${user.idDoc}`}>
              <IconButton color="primary" size="small" aria-label="add to shopping cart">
                <EditOutlinedIcon />
              </IconButton>
            </Link>
          </TableCell>
        </TableRow>
      )
    })

  )
    :
    (
      <TableRow>
        <TableCell >
          Employé non disponible
            </TableCell>
            <TableCell >
            </TableCell>
            <TableCell >
            </TableCell>
      </TableRow>
    )

  return (

    <Grid item md={12} style={{ padding: '20px' }}>
      <h1>Liste Employe</h1>
      <Divider />

      <Divider />
      <Grid item md={12}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell >NOM COMPLET</TableCell>
              <TableCell>PSEUDO</TableCell>
              <TableCell>EDITER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {displayListEmploye}

          </TableBody>
        </Table>
      </Grid>
    </Grid>



  )
}

export default React.memo(ListEmploye)
