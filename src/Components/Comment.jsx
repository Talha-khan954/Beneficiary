
import React from 'react'
import styled from 'styled-components'
import AvtarPhoto from "../img/channel photo.png"

const Containner = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`;

const Avtar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({theme})=>theme.text}
`;

const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme})=>theme.textSoft};
margin-left: 5px;
`;

const Text = styled.span`
font-size: 14px;
`;

function Comment() {
  return (
    <Containner>
        <Avtar src={AvtarPhoto}/>
        <Details>
            <Name>
                Jonh Doe <Date>1 Day ago</Date>
            </Name>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde incidunt perspiciatis vero molestias repudiandae alias explicabo architecto iste earum?</Text>
        </Details>
    </Containner>
  )
}

export default Comment