import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* height: 100vh; */
height: calc(100vh - 70px);
color: ${({theme})=>theme.text};
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: calc(100vh - 70px);
background-color: ${({theme})=>theme.bgLighter};
border: 1px solid ${({theme})=>theme.soft};
padding: 20px 50px;
gap: 8px;
`;

const Title = styled.h1`
font-size: 24px;
`;

const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;

`;

const Input = styled.input`
border: 1px solid ${({theme})=>theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
`;

const Button = styled.button`
border-radius: 3px;
border: none;
padding: 5px 15px;
font-weight: 500;
cursor: pointer;
background-color: ${({theme})=>theme.soft};
color: ${({theme})=>theme.textsoft};
`;

const More = styled.div`
display: flex;
margin-top: 10px;
font-size: 12px;
color: ${({theme})=>theme.textsoft};
`;

const Links = styled.div`
margin-left: 45px;
`;

const Link = styled.span`
margin-left: 30px;
`;

function SignIn() {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to Beneficiary</SubTitle>
            <Input placeholder='username'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign in</Button>
            <Title>or</Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            Einglish(USA)
            <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn