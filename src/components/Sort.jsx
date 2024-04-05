import React, { useContext } from 'react'
import { MyContext } from '../context/GlobalContext'
import { Select, Space } from 'antd';
import { supabase } from '../data/Data';
import { useTranslation } from 'react-i18next';

const Sort = () => {

    const [products, setProducts,isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts]=useContext(MyContext)
    const {t}=useTranslation()

    const sortProduct=(value)=>{
        if(value=='all'){
            getProducts()
            return;
        }else if(value=='high-to-low'){
            let copyProducts=[...products];
            let sortedProducts=copyProducts.sort((a,b)=>b.price-a.price)
            setProducts(sortedProducts)
        }else if(value=='low-to-high'){
            let copyProducts=[...products];
            let sortedProducts=copyProducts.sort((a,b)=>a.price-b.price)
            setProducts(sortedProducts)
        }else if(value=='a-z'){
            let copyProducts=[...products];
            let sortedProducts=copyProducts.sort((a,b)=>a.name.localeCompare(b.name))
            setProducts(sortedProducts)
        }else if(value=='z-a'){
            let copyProducts=[...products];
            let sortedProducts=copyProducts.sort((a,b)=>b.name.localeCompare(a.name))
            setProducts(sortedProducts)
        }else if(value=='rate-high-to-low'){
            let copyProducts=[...products];
            let sortedProducts=copyProducts.sort((a,b)=>b.rating-a.rating)
            setProducts(sortedProducts)
            console.log(products)
        }else if(value=='rate-low-to-high'){
            let copyProducts=[...products];
            let sortedProducts=copyProducts.sort((a,b)=>a.rating-b.rating)
            setProducts(sortedProducts)
        }
        }
  return (
    <>
      <Select
                defaultValue={t("All")}
                
                style={{
                    width: 150,
                }}
                onChange={sortProduct}
                options={[
                    {
                    value: 'a-z',
                    label: 'A-Z',
                    },
                    {
                    value: 'z-a',
                    label: 'Z-A',
                    },
                    {
                    value: 'low-to-high',
                    label: t("Price: Low to High"),
                    },
                    {
                    value: 'high-to-low',
                    label: t('Price: High to Low'),
                    },
                    {
                    value: 'rate-high-to-low',
                    label: t('Rating: High to Low'),
                    },
                    {
                    value: 'rate-low-to-high',
                    label: t('Rating: Low to High'),
                    },
                    {
                    value: 'all',
                    label: t('All'),
                    }
                ]}
                />
    </>
  )
}

export default Sort
