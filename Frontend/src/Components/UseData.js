import React from 'react'
import {createContext, useContext, useState} from "react";

function UseData() {
    const DataContext = createContext();

    const [loading, setLoading] = useState(false);
    const [dataready, setDataReady]  = useState(false);
    const [data, setData] = useState(null);

    
  return (
    <div>
      
    </div>
  )
}

export default UseData
