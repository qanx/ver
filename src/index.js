import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/projects" element={<ProjectsPage />}/>
    <Route path="/contact" element={<ContactPage />}/>
 
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

