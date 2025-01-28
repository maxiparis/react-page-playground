import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyName from "./components/MyName.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*  <Container className="min-vh-100" fluid>*/}
        <MyName myName={"World"}/>
      {/*</Container>*/}
  </StrictMode>,
)
