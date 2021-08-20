import React from "react";
import { useEffect } from 'react';
import styled from "styled-components";
import socket from '../../lib/socket';
import HallChatBox from './HallChatBox';


const HallWrapper = styled.div`
    width:100%;
    height:100%;    
`;


const HallComponent :React.FC = () =>{

   
   return <HallWrapper>
       <HallChatBox></HallChatBox>
   </HallWrapper>
}

export default HallComponent;