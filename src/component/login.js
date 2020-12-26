import React, { useState } from 'react'
import {auth} from './firebase'
import { useHistory } from "react-router-dom";


const Login=()=>{
    const [email, setemail]=useState('');
    const [pass, setpass]=useState('');
    const history=useHistory();
    
    auth.onAuthStateChanged((user)=>{
        if(user){
            history.push('/home')
        }
    })

    const signin=()=>{
        auth.signInWithEmailAndPassword(email, pass).then((user)=>{
           console.log(user)
        }).catch((error)=>{
            console.log(error);
        })
    }

    const signup=()=>{
        auth.createUserWithEmailAndPassword(email, pass).then((user)=>{
            console.log(user);
        }).catch((error)=>{
            console.log(error);
        })
    }


    return (
        <>
        <input value={email} placeholder='email' onChange={v=>setemail(v.target.value)}/>
        <input value={pass} placeholder='password' onChange={v=>setpass(v.target.value)}/>
        <button onClick={()=>{signin()}}>sign in</button>
        <button onClick={()=>{signup()}}>sign up</button>
        </>
    )
}


export default Login