import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataProvider=createContext();
const initialstate={
    loading:true,
    data:null,
    filterdata:[],
    dark_mode:false,
    error:false
}
export const ContextProvider=({children})=>{

 const [state,setstate]=useState(initialstate)
 const getapidata=async ()=>{
    try{
     let value=await axios("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
    //  let res=await value.json();;
    if(value?.data.user){
      setstate({
        ...initialstate,loading:false,data:value.data.user,error:false
        })
    }
    }
    catch(err){
    setstate({
      ...initialstate,loading:false,error:true,data:null
  })
  alert('something went wrong from server side');
    }
 }
 useEffect(()=>{
   getapidata()
 },[])



    return <DataProvider.Provider value={{state}}>
        {children}
    </DataProvider.Provider>
}