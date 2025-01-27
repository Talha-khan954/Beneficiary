import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f6f9;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #1abc9c;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 10px 0;

    a {
      text-decoration: none;
      color: white;
      font-size: 1.1rem;
      font-weight: bold;
      display: block;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #1abc9c;
      }
    }
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
`;

const Header = styled.div`
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1abc9c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

// Dashboard Pages
const Home = () => <h2>Welcome to the Dashboard Home</h2>;
const Analytics = () => <h2>Analytics Page</h2>;
const Settings = () => <h2>Settings Page</h2>;

const Dashboard = () => {
  return (
    <Router>
      <DashboardContainer>
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>Dashboard</SidebarHeader>
          <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </NavLinks>
        </Sidebar>

        {/* Main Content Area */}
        <ContentArea>
          <Header>
            <Logo>My Dashboard</Logo>
            <Profile>
              <Avatar>TK</Avatar>
              <span>Talha Khan</span>
            </Profile>
          </Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </ContentArea>
      </DashboardContainer>
    </Router>
  );
};

export default Dashboard;

