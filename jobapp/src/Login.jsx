import React,{useState} from 'react';
import "./styles/login.css";
import 'firebase/compat/auth'
import {useDispatch} from 'react-redux';
import { loginuser } from './components/userSlice';
import firebase from 'firebase/compat/app';

function Login() {

    const[signup,setSignUp]=useState(false);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const dispatch = useDispatch();
   const register = (e)=>{
     e.preventDefault() ;
     if(!name){
         return alert("Name is required")
     }
     if(!email){
        return alert("Email is required")
    }
    if(!password){
        return alert("Password is required")
    }
    firebase.auth().createUserWithEmailAndPassword(email,password).then((userCredential)=>{
      userCredential.user.updateProfile({
       displayName: name
      }).then(()=>{
dispatch(loginuser({
  email:userCredential.user.email,
  uid:userCredential.user.uid,
  displayName:name
}))
      })
    }).catch(error=>alert(error));
    setName("");
    setEmail("");
    setPassword("");
   }


   const  signIn=(e)=>{
     e.preventDefault();
     if(!email){
      return alert("Email is required")
  }
  if(!password){
      return alert("Password is required")
  }

   firebase.auth.signWithEmailAndPassword(email,password).then((user)=>{
    console.log(user)
  })
   }
     
  return (
      <> 
       
    <div className='loginScreen'>
    {
        signup===true ?
         (<form onSubmit={register}>
        <input type="text" placeholder="name"value={name} onChange={e=>setName(e.target.value)} />
        
        <input type="email" placeholder="email"value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password"value={password}  onChange={e=>setPassword(e.target.value)}/>
        <input type="submit" value="Sign Up"/>
        <h4>Allready a member ?<span  onClick={e=>setSignUp(false)}>Login here</span></h4>
    </form>) :
    (<form onSubmit={signIn}>
            
           <input type="email" placeholder="email"value={email} onChange={e=>setEmail(e.target.value)}/>
           <input type="password" placeholder="password"value={password}  onChange={e=>setPassword(e.target.value)} />
           <input type="submit" value="Login"/>
           <h4>Not  a member ?<span onClick={e=>setSignUp(true)}> Register here</span></h4>
       </form>)
      }
   
    </div>
    </>
  )
}

export default Login
