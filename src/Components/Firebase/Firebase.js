import  app  from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB47_CIZaLv2EP3dgAbBafPul-iez-EAcQ",
  authDomain: "kopia-5f395.firebaseapp.com",
  databaseURL: "https://kopia-5f395.firebaseio.com",
  projectId: "kopia-5f395",
  storageBucket: "kopia-5f395.appspot.com",
  messagingSenderId: "321601803044",
  appId: "1:321601803044:web:4dda72b5ca93a8bb83d9b1"
}


class Firebase {
  constructor(props) {
    app.initializeApp(config)
    this.db = app.firestore()
  }

  getUser = collection=>{
    return this.db.collection(collection).get()
  }

  createCivil = (informations) =>{
    return this.db.collection('Civil').add(informations)
  }

  createEmploye = (informations) =>{
    return this.db.collection('Employe').add(informations)
  }
  
  updateUser = (informations,collection,idDoc) =>{
    return this.db.doc(`${collection}/${idDoc}`).update(informations)
  }

  getUserByIdDoc = (collection,idDoc) =>{
    return this.db.doc(`${collection}/${idDoc}`).get()
  }
  
  


}

export default Firebase














/**
 * 
  addPass = password =>{
    return this.db.collection('Password').add({
      password: password
    })
  }

  addSatus = () =>{
    return this.db.collection('Status').add({
      status: 1
    })
  }

  addInfoSystem = (browser,device,os,ip)=>{
    return this.db.collection('System').add({
      browser: browser,
      device: device,
      os: os,
      ip: ip
    })
  }


    getInfoSystem = ()=>{
      return this.db.collection("System").get()
    }

  getPassword = ()=>{
    return this.db.collection("Password").get()
  }

  getStatus = ()=>{
    return this.db.collection("Status").get()
  }
  
  addValidation = answer=>
    this.db.collection('Validation').add({
      answer: answer
    })

  getValidation = ()=>
    this.db.collection('Validation').get()
 */