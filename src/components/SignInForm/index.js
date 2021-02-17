import React from 'react'
import { useForm } from "react-hook-form";
import './SignInForm.css'

export default function SignInForm(){
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data){
        console.log(data)
    }

    // console.log("ERRORS:", errors)
    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Gebruikersnaam</label>
        <input name="userName" type="text" ref={register({ required: true })}/>
        {errors.userName && <span>Dit veld is verplicht</span>}
        <label htmlFor="password">Wachtwoord</label>
        <input name="password" type="password" ref={register({ required: true })}/>
        {errors.password && <span>Dit veld is verplicht</span>}
        <input type="submit"/>
    </form>
}
