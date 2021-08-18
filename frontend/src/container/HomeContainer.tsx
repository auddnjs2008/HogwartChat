import React from "react";

import { RootStateOrAny, useSelector } from 'react-redux';

import HomeComponent from '../component/common/HomeComponent';

const HomeContainer : React.FC = () =>{
    const {name} = useSelector((state:RootStateOrAny)=>({name:state.auth.name}));

    
    return <HomeComponent name={name}/>
}

export default HomeContainer;