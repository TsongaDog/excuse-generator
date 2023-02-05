import './App.css';
import Axios from "axios";
import { useState, useEffect } from "react";
import { Category } from "./Category";

function App() {
    const [excuse, setExcuse] = useState('');

    const fetchRandomExcuse = () => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse`)
            .then(res => setExcuse(res.data[0].excuse))
    }

    const fetchCategory = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
            .then(res => setExcuse(res.data[0].excuse))
    }

    return (
        <Category excuse={excuse} fetchRandomExcuse={fetchRandomExcuse} fetchCategory={fetchCategory}/>
    )
}


export default App
