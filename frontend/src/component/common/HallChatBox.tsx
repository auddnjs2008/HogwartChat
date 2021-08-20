import React from "react";
import { useRef } from 'react';
import { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

import sendMessage from '../../lib/function/sendMessage';
import { receiveChat, sendChat } from '../../modules/socket';

const ChatWrapper = styled.div`
    width:48%;
    height:95%;

    background-color:rgba(45, 52, 54,0.95);
    display:flex;
    flex-direction:column;
    ul{
        width:100%;
        height:90%;
        padding:10px;
        li{
            display:flex;
        
            margin-bottom:9px;
          img{
              border-radius:50%;
              width:30px;
              height:30px;
              margin-right:10px;
              background-color:#b2bec3;
          }
          .name{
              font-size:15px;
              margin-right:10px;
              color:white;
          }
          .date{
              font-size:12px;
              color:#b2bec3;
          }
          .message{
             font-size:20px;
             border: 1px solid white;
             border-radius:5px;
             display:flex;
             justify-content:center;
             align-items:center;
             padding:5px;
             margin-top:6px;
             color:white;
          }  
        }

    }
    form{
        flex:1;
        display:flex;
        input{
            outline:none;
            border:none;   
            width:90%;
            font-size:1.2rem;
            &::-webkit-input-placeholder{
                font-size:1.3rem;
            }
        }
        button{
            all:unset;
            flex:1;
            background-color:#AAB3B5;
            text-align:center;
            &:active{
                transform:scale(0.99);
            }
        }
    }
`;

const HallChatBox :React.FC =() =>{
    const [text,setText] =useState("");
    const hallChatUl=useRef<HTMLUListElement>(null);
    const {name,dormitory} = useSelector(({auth}:RootStateOrAny) =>({name:auth.name,dormitory:auth.dormitory})); 
    const dispatch = useDispatch();
    const onSubmit = (e:React.SyntheticEvent<HTMLFormElement>) =>{
        e.preventDefault();
        sendMessage(text,name,dormitory,hallChatUl);
        dispatch(sendChat({message:text}));
        dispatch(receiveChat());
        setText("");
    }

    const onChange = (e:React.SyntheticEvent<HTMLInputElement>)=>{
        const message = e.currentTarget.value;
        setText(message);
    }

   

    return <ChatWrapper>
        <ul ref={hallChatUl}>

        </ul>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="message" value={text}></input>
            <button>Submit</button>
        </form>
    </ChatWrapper>
}

export default HallChatBox;