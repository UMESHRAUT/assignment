import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PlanContainer from './components/content/PlanContainer';
import SearchBar from './components/content/SearchBar';

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
        <PlanContainer search={search}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
