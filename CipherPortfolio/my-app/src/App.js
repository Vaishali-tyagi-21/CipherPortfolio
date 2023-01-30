import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import styled from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ComponentTwo from './ComponentTwo';


const Container = styled.div`
background-color: crimson;
`;


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
    },
    {
      path:'/about',
      element:<ComponentTwo/>
    }
  ]);
  return (
    <Container >
      <RouterProvider router={router} />
    </Container>
  );
}


export default App;