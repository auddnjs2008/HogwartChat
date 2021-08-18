import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthForm from '../component/Auth/AuthForm';
import { login, register } from '../modules/auth';



const AuthContainer :React.FC = () =>{
    const dispatch = useDispatch();
    const [authInfo,setAuth] = useState({});

    useEffect(()=>{

        if(Object.keys(authInfo).length && !Object.keys(authInfo).includes("dormitory") ){
            dispatch(login(authInfo));
        }else if(Object.keys(authInfo).length && Object.keys(authInfo).includes("dormitory")){
            dispatch(register(authInfo));
        }
    },[authInfo])

    return <AuthForm setAuth={setAuth}/>;
}

export default AuthContainer;