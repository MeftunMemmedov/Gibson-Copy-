import { createContext } from "react";
import { useEffect, useState } from "react"
import { supabase } from "../data/Data"


export const MyContext=createContext()

export const ContextProvider=({children})=>{

// isloggedin
const [isLoggedIn,setIsLoggedIn]=useState(false);
// isloggedin

// isAdminIn
const [isAdminIn,setIsAdminIn]=useState(false)
// isAdminIn


// dark-light-theme
const [theme, setTheme]=useState('bg-light')

    const changeTheme=()=>{
      if(theme=='bg-light'){
        setTheme('bg-black text-light')
        localStorage.setItem('theme', 'dark-theme')
      } else {
        setTheme('bg-light')
        localStorage.setItem('theme','light-theme')
      }
    }
// dark-light-theme

// loading
const [isLoading,setIsLoading]=useState(true)
// loading

//products
const [products, setProducts]=useState([])

async function getProducts() {
    const {data}=await supabase.from('Guitars').select('*')
    setProducts(data)
    console.log(products)
}

useEffect(()=>{
    getProducts()
    
}, [])

//products

return (
    <>
      <MyContext.Provider value={[products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]}>
        {children}
      </MyContext.Provider>
    </>
  )
}