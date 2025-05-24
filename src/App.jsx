import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./page/Card";
import './index.css';
import "./App.css";
import Slug from "./page/Slug";
import Navbar from "./componets/Navbar/Navbar";
import Order from "./page/Order";
import About from "./page/About";
import Model from "./componets/Model/Model";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [copy, setCopy] = useState([]);
  const [filter, setFilter] = useState("smartphones");
  const [model, setModel] = useState(false);

  console.log(data);
  
  useEffect(() => {
    fetch('http://localhost:3000/get')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        
        setLoading(false);
      }).catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
      
  }, []);

  return (
    <Router>
      <div>
        <Navbar setData={setData} data={data} dark={dark} setDark={setDark} setFilter={setFilter} model={model} />
        <Routes>
          <Route 
            path="/" 
            element={<Card setData={setData} data={data} dark={dark} setDark={setDark} filter={filter} />} 
          />
          <Route 
            path="/:_id" 
            element={<Slug  loading={loading} setLoading={setLoading} dark={dark}  setCopy={setCopy} />} 
          />
          <Route 
            path="/order" 
            element={<Order setCopy={setCopy} copy={copy} dark={dark} model={model} setModel={setModel}/>} 
          />
          <Route 
            path="/about" 
            element={<About  dark={dark}/>} 
          />
        </Routes>
        {model && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-all" />}
        {model && <Model model={model} setModel={setModel} dark={dark} />}
      </div>
    </Router>
  );
}
export default App;