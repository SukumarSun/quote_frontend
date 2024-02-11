import { useState } from "react"
import '../App.css'

const Register=()=>{

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")


    const onRegister=async(e)=>{
        e.preventDefault()

        const reg_data=await fetch("http://localhost:3001/register",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name, 
            email,
            password
            
        })})

    }

    return(
        <div className="outside">
           <form onSubmit={onRegister}>
            <div className="each">
                <label>Name</label>
                <input onChange={e=>setName(e.target.value)} value={name} placeholder="name" type="text"/>
            </div>
            <div className="each">
                <label>Email</label>
                <input onChange={e=>setEmail(e.target.value)} value={email} placeholder="email" type="text"/>
            </div>
            <div className="each">
                <label>Password</label>
                <input onChange={e=>setPassword(e.target.value)} value={password} placeholder="password" type="password"/>
            </div>
            <button type="submit">Register</button>
           </form>
        </div>
    )
}

export default Register