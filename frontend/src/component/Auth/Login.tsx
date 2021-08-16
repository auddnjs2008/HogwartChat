import React from "react";
import { useState } from 'react';
import styled from "styled-components";
import { loginUser } from '../../lib/api/user';

const LoginWrapper = styled.form``;

const Login :React.FC = () =>{

    const [inputs,setInputs] = useState({
        id:"",
        password:"",
    });

    const onChange = (event:React.SyntheticEvent<HTMLInputElement>) =>{
        const {value,name} = event.currentTarget;
        setInputs({...inputs,[name]:value});
    }

    const onSubmit =async (event:React.SyntheticEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const result = await loginUser(inputs);
        
    }

    return( 
    <LoginWrapper onSubmit={onSubmit}>
        <input name="id" type="text" placeholder="id" onChange={onChange} />
        <input name="password" type="password" placeholder="password" onChange={onChange}/>
        <button>Submit</button>
    </LoginWrapper>
    )
}

export default Login;