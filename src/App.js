//import logo from './logo.svg';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WeatherTable from './components/WeatherTable';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect } from "react";
import AlertModal from './components/AlertModal'; //RH import component

function App() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://cdn.contentstack.io/v3/content_types/home/entries/blte14ec6029b07518c?environment=dev&include[]=menu&include_fallback=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "blt08dee5232a8229a1",
            access_token: "csc4bb1af1a74e15c276a7e9c9",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.entry);
          setLoading(false);
        });
    };
    Fetchdata();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (!data) {
    return <div className="App">Loading...</div>;
  }

  console.log(data)

  return (
    <div className="App">
        <AlertModal props={data.modal}></AlertModal>
        <Navigation props={data.menu}></Navigation>
        <Hero props={data.hero}></Hero>
        <WeatherTable></WeatherTable>
        <Footer></Footer>
    </div>
  );
}

export default App;
