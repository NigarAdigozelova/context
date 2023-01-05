
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tablee from "../components/Tablee"

const Home = () => { 
    const [data,setData]=useState([])
    const URL="https://northwind.vercel.app/api/products"
    useEffect(()=>{
        axios.get(URL).then((resp) => setData(resp.data))

    },[])
  
  return (
    <>
 <Tablee data={data}/>
    </>
  )
}

export default Home