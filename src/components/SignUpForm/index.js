import React from 'react'
import { useForm } from "react-hook-form";
import './SignUpForm.css'

export default function SignUpForm(){
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data){
        console.log(data)
    }

    // console.log("ERRORS:", errors)
    return (
<div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <input name="email" type="text" ref={register({ required: true})}/>
        {errors.email && <span>Dit veld is verplicht</span>}
        <label htmlFor="username">Gebruikersnaam</label>
        <input name="username" type="text" ref={register({ required: true })}/>
        {errors.userName && <span>Dit veld is verplicht</span>}
        <label htmlFor="password">Wachtwoord</label>
        <input name="password" type="password" ref={register({ required: true })}/>
        {errors.password && <span>Dit veld is verplicht</span>}
        <input type="submit"/>
    </form>
</div>
    )
}
