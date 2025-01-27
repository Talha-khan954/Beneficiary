// import  "@mui/material"
// import React from 'react'
// import styled from "styled-components"
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
// import ReplyIcon from '@mui/icons-material/Reply';
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import ChannelPhoto from "../img/channel photo.png"
// import Comments from "../Components/Comments";
// // import { Card } from "@mui/material";
// import Card from "../Components/Card"

// const Container = styled.div`
// display: flex;
// gap: 24px;
// `;

// const Content = styled.div`
// flex: 3.5;
// `;

// const VideoWrapper = styled.div`
// `;

// const Title = styled.h1`
// font-style: 18px;
// font-weight: 400;
// margin-top: 20px;
// margin-bottom: 10px;
// color: ${({theme})=>theme.text};
// `;


// const Details = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// `;
// const Info = styled.span`
// color: ${({theme})=>theme.textSoft};
// `;
// const Buttons = styled.div`
// display: flex;
// gap: 20px;
// color: ${({theme})=>theme.text};
// gap: 15px;
// `;

// const Hr = styled.hr`
// margin: 15px 0px;
// border: 0.5px solid ${({theme})=>theme.text};
// `;

// const Button = styled.div`
// `;

// const Recommendation = styled.div`
// flex: 2;
// `;

// const Channel = styled.div`
// display: flex;
// justify-content: space-between;
// `;

// const ChannelInfo = styled.div`
// display: flex;
// gap: 20px;
// `;

// const Image = styled.img`
// width: 50px;
// height: 50px;
// border-radius: 50%;
// `;

// const ChannelDetail = styled.div`
// display: flex;
// flex-direction: column;
// color : ${({theme})=>theme.text};
// `;

// const ChannelName = styled.span`
// font-weight: 500;
// `;

// const ChannelCounter = styled.span`
// margin-top: 5px;
// margin-bottom: 20px;
// color: ${({theme})=>theme.textSoft};
// font-size: 12px;
// `;

// const Discription = styled.p`
// font-size: 14px;
// `;

// const Subscribe = styled.button`
// background-color: #cc1a00;
// font-weight: 500;
// color: white;
// border: none;
// border-radius: 3px;
// height: max-content;
// padding: 10px 20px;
// cursor: pointer;


// `;


// const Video = () => {
//   return <Container>
//     <Content>
//     <VideoWrapper>
//       <iframe
//       width="100%"
//       height="400"
//       src="https://www.youtube.com/watch?v=burebKuZUbI"
//       title="YouTube Video Player"
//       frameBorder="0"
//       allow="eccelerometer; clipboard-write encripted-media; picture-in-picture"
//       allowFullScreen
//       ></iframe>
//     </VideoWrapper>

//     <Title>Test Video</Title>
//     <Details>
//       <Info>7,948,154 views . jun 22, 2024</Info>
//       <Buttons>
//         <Button>
//           <ThumbUpOffAltIcon/> 1.5k
//         </Button>
//         <Button>
//           <ThumbDownOffAltIcon/> Dislike
//         </Button>
//         <Button>
//           <ReplyIcon/> Share
//         </Button>
//         <Button>
//           <AddTaskIcon/> Save
//         </Button>
//       </Buttons>
//     </Details>
//    <Hr/>

//    <Channel>
//    <ChannelInfo>
//     <Image src={ChannelPhoto} />
//     <ChannelDetail>
//       <ChannelName>Talha Dev</ChannelName>
//       <ChannelCounter>200k Subscribers</ChannelCounter>
//       <Discription>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto tenetur soluta facere aut, fuga, deserunt consequuntur pariatur, 
//       </Discription>
//     </ChannelDetail>

//    </ChannelInfo>
//     <Subscribe>SUBSCRIBE</Subscribe>
//    </Channel>
//    <Hr/>
//    <Comments/>
//     </Content>

//     <Recommendation>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>
//       <Card type="sm"/>

//     </Recommendation>

//   </Container>
         
  
// }

// export default Video