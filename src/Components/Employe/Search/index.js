import React,{useContext,useState} from 'react'
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
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
  main: {
    padding: '100px',
    

  },

  
}));


const Search = () => {
  const classes = useStyles();
  const [uid, setUid] = useState('')
  const [userFetched, setUserFetched] = useState([])
  const firebase = useContext(FirebaseContext)
  const handleUid = e=>{
    setUid(e.target.value)
  }
const handleSubmit = e=>{
  e.preventDefault()
  firebase.getUser('Civil')
  .then((collection) => {
    if (collection) {
      let tabTemp = []
      collection.docs.map(doc => tabTemp.push(doc.data()))
      if(tabTemp !== 0){
        const result = tabTemp.filter( user=> user.id == uid )
        setUserFetched(result)
        console.log(userFetched)
      }else{
        console.log('y a pase de user')
      }
    } else {
    
      console.log(" Collection not foud une erreur est survenu")
    }
  })
  .catch( err=>{
    console.log(" une erreur est survenu")
  })
  console.log(uid)
}



const displayUser = userFetched.length !== 0 ? (
  <Table aria-label="simple table">
      
        <TableBody>
            <TableRow>
            <TableCell >{userFetched[0].id}</TableCell>
            <TableCell >{userFetched[0].firstName}</TableCell>
            <TableCell >{userFetched[0].birth}</TableCell>
            <TableCell >{userFetched[0].at}</TableCell>
            <TableCell >
           
             <Link to="/employe/update-civil">
             <IconButton color="primary" size="small"  aria-label="add to shopping cart">
              <EditOutlinedIcon />
      </IconButton>
             </Link>
            </TableCell>
             
            </TableRow>
       
        </TableBody>
      </Table>
)
 : 
(
<Alert variant="filled" severity="error">
  Civil non trouvé
</Alert>
)
  return (
   
    <Grid item md={12} style={{padding: '20px'}}>
    <h1>Search</h1>
    <Divider />
    <form 
    noValidate 
    autoComplete="off" 
    style={{margin : '20px'}}
    onSubmit={handleSubmit}
     >
    <Grid item md={12} container direction="column" spacing={2} justify="center" alignItems="center">
      
      <Grid item>
      <TextField 
      id="name" 
      label="Search ID" 
      variant="outlined" 
      onChange={handleUid}
      value={uid}
      />
      </Grid>
      <Grid item md={12} style={{textAlign: 'center'}}>
        <Button 
        variant="contained" 
        color="primary"
        type="submit"
        >
          RECHERCHER
        </Button>
      </Grid>
    </Grid>
    </form>
    <Divider />
    <Grid item md={12}>
      

{displayUser}


      </Grid>
  </Grid>

      
    
  )
}

export default Search
