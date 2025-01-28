import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainTemplate from "./components/MainTemplate.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*  <Container className="min-vh-100" fluid>*/}
        <MainTemplate myName={"World"}/>
      {/*</Container>*/}
  </StrictMode>,
)
