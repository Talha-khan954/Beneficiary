import React from 'react'
import styled from 'styled-components'
import YouTube from "../img/favicon-32x32.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const Container = styled.div`
flex: 1.3;
background-color: ${({theme})=>theme.bgLighter};
height: 155vh;
color: ${({theme})=>theme.text};
font-size: 14px;
position:sticky;
top: 0;
`;

const Wrapper = styled.div`
padding: 18px 26px;
`;

const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight:bold;
margin-bottom: 25px;
`;

const Img = styled.img`
height: 25px;
`;

const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
padding: 7.5px 0px;

&:hover{
background-color: ${({theme})=>theme.soft};
}
`;

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme})=>theme.soft};
`;

const Login = styled.div`

`;

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5;
`;

const Title = styled.h2`
font-size: 14px;
font-weight: 500;
color: #aaaaaa;
margin: 20px;
`;

export const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
    <Wrapper>
    <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
    <Logo>
    {/* <Img src={YouTube} /> */}
    Beneficiary Management
    </Logo>
    </Link>
    <Item>
      <DashboardIcon/>
      Dashboard
    </Item>
    <Item>
      <ExploreIcon/>
      Explore
    </Item>
    <Item>
      <SubscriptionsIcon/>
      Subscriptions
    </Item>
    <Hr/>
    <Item>
      <VideoLibraryIcon/>
      Library
    </Item>
    <Item>
      <HistoryIcon/>
      History
    </Item>
    <Hr/>
    <Login>
      Sign in to like videos, comment, and subscribe.
      <Link to="dashboard/signin" style={{textDecoration:"none"}}>
      <Button> <AccountCircleIcon/> SIGN IN</Button>
      </Link>
    </Login>
    <Hr/>
    
    <Item>
      <LiveTvIcon/>
      Live
    </Item>
    <Item>
      <SettingsIcon/>
      Settings
    </Item>
    <Item>
      <OutlinedFlagIcon/>
      Report
    </Item>
    <Item>
      <HelpOutlineIcon/>
      Help
    </Item>
    <Item onClick={()=>setDarkMode(!darkMode)}>
      <SettingsBrightnessIcon/>
      {darkMode ? "Light" : "Dark"} Mode
    </Item>
    </Wrapper>
    </Container>
  )
}


export default Menu