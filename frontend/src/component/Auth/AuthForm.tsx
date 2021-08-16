import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const AuthWrapper = styled.div`
    width:500px;
    height:500px;
    border: 1px solid black;
`;


const AuthForm : React.FC = () =>{
    const [isLogin,setLogin] = useState<boolean>(true);
    return <AuthWrapper>
        {isLogin ? <Login></Login> : <Register></Register>}
     <button onClick={()=>setLogin(item=>!item)}>{isLogin ? "Sign Up" :"Sign In"}</button>   
    </AuthWrapper> 
}

export default AuthForm;