import React, { Dispatch, SetStateAction } from "react";
import { useState } from 'react';
import styled from "styled-components";
import { loginUser, registerUser } from '../../lib/api/user';

const RegisterWrapper = styled.form`
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
    select{
        height:50px;
        font-size:20px;
        background-color:#2d3436;
        color:white;
        option{
            height:30px;
            
        }
        option:hover{
            background:black;
        
        }
    }
  
`;

type Info ={
    id:string,
    name:string,
    dormitory:string,
}
type LoginProp={
    setAuth:Dispatch<SetStateAction<Info>>
}
const Register :React.FC<LoginProp> = ({setAuth}) =>{
    
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
        if(inputs.id && inputs.name && inputs.password){
        setAuth(inputs);
        setInputs({id:"",name:"",password:"",dormitory:"griffindor"});    
    }else{
            alert("모든 정보를 입력해주세요");
            return;
        }
    }
    

    return(
        <RegisterWrapper onSubmit={onSubmit}>
            <input name="id"  type="text" placeholder="id" onChange={onChange} value={inputs.id}></input>
            <input name="name" type="text" placeholder="name" onChange={onChange} value={inputs.name}></input>
            <input name="password" type="password" placeholder="password" onChange={onChange} value={inputs.password}></input>
            <select className="select" name="dormitory" onChange={onChange}>
                <option value="griffindor">Griffindor</option>
                <option value="slytherin">Slytherin</option>
                <option value="hufflepuff">Hufflepuff</option>
                <option value="ravenclaw">RavenClaw</option>
            </select>
            <button>submit</button>
        </RegisterWrapper>
    )
}

export default Register;