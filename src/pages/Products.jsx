import React , {useEffect,useState} from "react";
import './style.scss'
import productList from "../assets/images/jsons/products.json"
import Product from "../components/Product"


const Products = () => {

    const[products,setProducts]=useState([]);
    useEffect(()=>{
        setProducts(productList)
    },[])

    return(
        <div className="container">
        <h1> Products</h1>
        <div className="product-grid">
        {products.map((product)=><Product product={product}/>)}
        </div>
       
        </div>

    )
}

export default Products;