import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getStoreItems();
  }, []);

  const getStoreItems = async () => {
    const url = "https://fakestoreapi.com/products/";
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      {loading ? <div>loading.....</div> : <Card data={data} />}
    </div>
  );
}

export default App;
