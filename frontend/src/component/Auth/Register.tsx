import React from "react";
import { useState } from 'react';
import styled from "styled-components";
import { registerUser } from '../../lib/api/user';

const RegisterWrapper = styled.form``;


const Register :React.FC = () =>{
    
    const [inputs,setInputs]=useState({
        id:"",
        name:"",
        password:"",
        dormitory:"griffindor",
    })

    const onChange = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
        const {value, name} =event.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    const onSubmit =async (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const result = await registerUser(inputs);
    }
    

    return(
        <RegisterWrapper onSubmit={onSubmit}>
            <input name="id"  type="text" placeholder="id" onChange={onChange}></input>
            <input name="name" type="text" placeholder="name" onChange={onChange}></input>
            <input name="password" type="password" placeholder="password" onChange={onChange}></input>
            <select name="dormitory" onChange={onChange}>
                <option value="griffindor">그리핀도르</option>
                <option value="slytherin">슬리데린</option>
                <option value="hufflepuff">후플푸프</option>
                <option value="ravenclaw">래번클로</option>
            </select>
            <button>submit</button>
        </RegisterWrapper>
    )
}

export default Register;