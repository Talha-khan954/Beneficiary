import React from 'react'
import styled from 'styled-components'
import AvtarPhoto from "../img/channel photo.png"
import Comment from "../Components/Comment.jsx"

const Container = styled.div`

`;

const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Avtar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme})=>theme.textSoft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
`;

function Comments() {
  return (
    <Container >
        <NewComment>
           <Avtar src={AvtarPhoto}/> 
           <Input placeholder='Add a comment...' />
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments