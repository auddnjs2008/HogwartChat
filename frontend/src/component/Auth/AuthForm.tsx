import React, { Dispatch, SetStateAction } from "react";
import { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const AuthWrapper = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:500px;
    height:500px;

    display:flex;
  
    align-items:center;
    button.toggle{
        all:unset;
        color:white;
        font-weight:600;
        position:absolute;
        bottom:0;
        right:20%;
    }
`;

const HatImg = styled.img`
    width:25rem;
    height:20rem;
    @keyframes hatMove{
        0%{
          transform:translateY(0px);  
        }
        50%{
          transform:translateY(-30px);  
        }
        100%{
            transform:translateY(0px);
        }
    }
    animation:hatMove 8s linear infinite;
`;

type AuthFormProps ={
    setAuth:Dispatch<SetStateAction<Object>>
}

const AuthForm : React.FC<AuthFormProps> = ({setAuth}) =>{
    const [isLogin,setLogin] = useState<boolean>(true);
    return <AuthWrapper>
    <HatImg src="https://hogwartchat.s3.ap-northeast-2.amazonaws.com/%EB%B6%84%EB%A5%98%EB%AA%A8%EC%9E%90.png"></HatImg>
    {isLogin ? <Login setAuth={setAuth}></Login> : <Register setAuth={setAuth}></Register>}
     <button className="toggle" onClick={()=>setLogin(item=>!item)}>{isLogin ? "Sign Up" :"Sign In"}</button>   
    </AuthWrapper> 
}

export default AuthForm;