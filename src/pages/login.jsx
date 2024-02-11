import { useState } from "react"
import '../App.css'

const Login=()=>{

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")


    const onLogin=async (e)=>{
        e.preventDefault()
        try{
             const reg_data=await fetch("http://localhost:3001/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            email,
            password      
        })})

        const data=await reg_data.json() 
        console.log(data)
        }
        catch(err){
            console.log(err)
        }
      
       

    }

    return(
        <div className="outside">
           <form onSubmit={onLogin}>
            <div className="each">
                <label>Email</label>
                <input onChange={e=>setEmail(e.target.value)} value={email} placeholder="email" type="text"/>
            </div>
            <div className="each">
                <label>Password</label>
                <input onChange={e=>setPassword(e.target.value)} value={password} placeholder="password" type="password"/>
            </div>
            <button type="submit">Login</button>
           </form>
        </div>
    )
}

export default Login