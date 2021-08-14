import axios from 'axios'
import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Layout from '../core/Layout'
import { isAuth } from './helper'

const SignUp = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        buttonText:"Submit"
    })

    const {name, email, password, buttonText } = values

    const handleChange = (name:string) => (event:any)=>{
        setValues({...values,[name]:event.target.value})
    }

    const clickSubmit = (event:any)=>{
        event.preventDefault();
        setValues({...values, buttonText:'Submitting'})
        axios({
            method:'POST',
            url:`${process.env.REACT_APP_API}/signup`,
            data: {name, email, password}
        }).then((response)=>{
            console.log('SIGNUP_SUCCESS ', response)
            setValues({...values,name:'',email:'', password:'',buttonText:'Submitted'})
            toast.success(response.data.message)
        }).catch(error => {
            console.log('SIGNUP ERROR ', error.response.data)
            setValues({...values,buttonText:'Submit'})
            toast.error(error.response.data.error)
        })
    }
    
    // console.log("state ", values)

    const signupForm = () =>(
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return (
        <Layout>
           <div className="col-md-6 offset-md-3">
           <ToastContainer/>
           {isAuth() ?<Redirect to="/"/> :<></>}
            <h1 className="p-5 text-center">Signup</h1>
            {signupForm()}
           </div>
        </Layout>
    )
}

export default SignUp