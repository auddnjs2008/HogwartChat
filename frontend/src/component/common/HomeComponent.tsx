import React from "react";
import styled from "styled-components";
import AuthContainer from '../../container/AuthContainer';
import HallComponent from './HallComponent';


const HomeWrapper = styled.div`
 background-image:url("https://hogwartchat.s3.ap-northeast-2.amazonaws.com/%EC%97%B0%ED%9A%8C%EC%9E%A5.jpg");
 width:100vw;
 height:100vh;
 background-size:contain;
`;

type HomeProps={
    name:string;
   
}

const HomeComponent : React.FC<HomeProps> =({name}) =>{
    return(
        <HomeWrapper>
            {name ? <HallComponent/> :<AuthContainer/>}
        </HomeWrapper>
    )
}

export default HomeComponent;