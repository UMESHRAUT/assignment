import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PlanContainer from './components/content/PlanContainer';
import SearchBar from './components/content/SearchBar';
import {Route } from 'react-router-dom';

function App() {
  const [search,setSearch]=useState("");
  const handleSearch=(e)=>{
    console.log(e+"logging from app");
    setSearch(e)

  }
  return (
    
    <div className="App">
      <div className="app_body">
        <Header/>
        <SearchBar search={handleSearch}/>
        
        <Route exact path="/assignment/">
        <PlanContainer search={search}/>
        </Route>
        <Route exact path="/assignment/:id">
        <PlanContainer search={search}/>
        </Route>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
