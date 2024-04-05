import React, { useState,useContext } from 'react'
import { MyContext } from '../context/GlobalContext'
import { supabase } from '../data/Data'
import { t } from 'i18next'

const CategoryBtns = () => {
    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme]=useContext(MyContext)


 

    const categories=[
        {
            categoryImg:'https://img.freepik.com/free-vector/acoustic-electric-guitars-set_1284-52287.jpg?w=740&t=st=1707323384~exp=1707323984~hmac=0b4747b07feb32be99a95a4f2768c2f0a09c3f4e43d8d41d9c7b2d3a343809f0',
            categoryName:'All',
        }
        ,
        {
            categoryImg:'https://img.freepik.com/free-vector/collection-electric-guitars_1043-75.jpg?w=740&t=st=1707323183~exp=1707323783~hmac=6111f5cb125b35840b761013128788bed9ff994f60a2a64664fb7744bffd4d63',
            categoryName: 'Electric'
        },
        {
            categoryImg:'https://img.freepik.com/free-vector/acoustic-guitar-isolated-white-background_1308-114638.jpg?w=740&t=st=1707323313~exp=1707323913~hmac=a82896e014065d78bd8c35d6bac0f1dfb7dd7f4fd994adf72ad706b5259fc79e',
            categoryName:'Acoustic'
        },
        {
            categoryImg:'https://static.vecteezy.com/system/resources/previews/011/518/068/non_2x/bass-guitar-black-and-white-icon-isolated-string-set-free-vector.jpg',
            categoryName:'Bass'
        }
           
    ]

    async function filterGuitars(category){
        const {data}= await supabase.from('Guitars').select('*')
        if(category==='All'){
            setProducts(data)
            return;
        }

        const filteredProducts=data.filter((item)=>item.category===category)

        setProducts(filteredProducts)
    }

    // async function filterProductsByBrands(category){
    //     const {data}= await supabase.from('Products').select('*')

    //     const filteredProducts=data.filter((item)=>item.category_brand===category)

    //     setProducts(filteredProducts)
    // }


    
  return (
    <>

        
               {
                categories.map((category)=>{
                    return(
                        <>
                        <div className="col-lg-2 col-12 my-1 rounded border bg-white pe-auto category-boxes" style={{height:'200px'}} onClick={()=>filterGuitars(category.categoryName)}>
                            <div className="row h-100">
                                <div className="col-12 h-75"><img src={category.categoryImg} className='h-100' alt="" /></div>
                                <div className={`col-12 `}><h6 className='text-dark'>{t(category.categoryName)}</h6></div>
                            </div>
    
                        </div>
                        </>
                    )
                })
               }
        
            
            {/* <div className="row">
            {
                categoriesBrands.map((category)=>{
                    return(
                        <>
                        <div className="col-2">
                            <button className='btn btn-warning w-100 my-2'
                            onClick={()=>filterProductsByBrands(category)}
                            >{category}</button>
                        </div>
                        </>
                    )
                })
               }
            </div> */}

    </>
  )
}

export default CategoryBtns
