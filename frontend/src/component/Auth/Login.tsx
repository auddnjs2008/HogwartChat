import React, { Dispatch, SetStateAction } from "react";
import { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from "styled-components";
import { loginUser } from '../../lib/api/user';

const LoginWrapper = styled.form`

    display:flex;
    flex-direction:column;
    width:80%;
    input{
        background-color:#2d3436;
        padding:3px;
        height:2.3rem;
        border:8px solid #2d3436;
        color:white;
        font-size:1.5rem;
    &::-webkit-input-placeholder{
        color:white;
    }
    }
    input:focus{
        outline:none;
        border:8px solid #dfe6e9;
    }
    button{
        all:unset;
        height:1.3rem;
        background-color:black;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:5px;
        &:active{
            transform:scale(0.98);
        }
    }
`;

type Info ={
    id:string,
    password:string
}
type LoginProp={
    setAuth:Dispatch<SetStateAction<Info>>
}



const Login:React.FC<LoginProp & RouteComponentProps> = ({history,setAuth}) =>{

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
        setAuth(inputs);
        setInputs({id:"",password:""}); 
    }

    return( 
    <LoginWrapper onSubmit={onSubmit}>
        <input name="id" type="text" placeholder="id" onChange={onChange} value={inputs.id} />
        <input name="password" type="password" placeholder="password" onChange={onChange} value={inputs.password}/>
        <button>Submit</button>
    </LoginWrapper>
    )
}

export default withRouter(Login);