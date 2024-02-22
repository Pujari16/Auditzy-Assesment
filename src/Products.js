import React, {useEffect, useState} from "react";
import './index.css'
import Header from "./Header";
import axios from "axios";
import {TextField, MenuItem} from "@mui/material";
import Loader from "./Loader";
import DialogComp from "./Dialog";

function Products() {

    const [products, setProducts] = useState();
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sort, setSort] = useState('asc');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [updateStat, setUpdateStat] = useState(false);


    const getAllProducts = async (sort) =>{
        setProducts(null);
        try{
            const res = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`);
            setProducts(res.data);
        }catch (err){
            console.log(err);
        }
    }

    const getAllCategories = async () =>{
        try{
            const res = await axios.get('https://fakestoreapi.com/products/categories');
            setCategories(res.data);
        }catch (err){
            console.log(err);
        }
    }

    const handleCategorySelected = async(event) => {
        setSelectedCategory(event.target.value);
    }

    const handleSort = () => {
        if(sort === "asc"){
            setSort("desc");
        }
        else{
            setSort("asc");
        }
    }

    useEffect( () => {
        getAllProducts(sort);
        getAllCategories();
    }, []);

    const getCategoryWiseProducts = async() => {
        setProducts(null);
        if(selectedCategory.length > 0){
            try{
                const res = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`);
                setProducts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        else{
            try{
                const res = await axios.get(`https://fakestoreapi.com/products`);
                setProducts(res.data);
            }catch(err){
                console.log(err);
            }
        }
    }

    const handleUpdate = (id) => {
        setUpdateStat(true);
        setDialogOpen(true);
        setSelectedProduct(products?.find(item => item.id === id));
    }

    const handleDelete = (id) => {
        try{
            const res = axios.delete(`https://fakestoreapi.com/products/${id}`);
            alert(`Product Deleted Successfully...!`);
            window.location.reload();
        }catch (err){
            alert("Not Deleted...!");
            console.log(err);
        }
    }

    const addProduct = () => {
        setUpdateStat(false);
        setSelectedProduct();
        setDialogOpen(true);
    }

    useEffect(() => {
        getCategoryWiseProducts();
    }, [selectedCategory]);

    useEffect(() => {
        getAllProducts(sort);
    }, [sort]);

    const handleClose = (value) => {
        setDialogOpen(false);
    };

    return(
        <>
            <Header/>

            <div className={"head-container1"}>
                <div className={"menu-container"}>
                    <TextField
                        label={"Select Category"}
                        select
                        value={selectedCategory}
                        onChange={handleCategorySelected}
                        fullWidth
                    >
                        <MenuItem value={''}>--Select--</MenuItem>
                        {categories?.map((category, index) => (
                            <MenuItem key={index} value={category}>{category}</MenuItem>
                        ))}
                    </TextField>
                </div>
                <button className={"btn btn-primary sort-button"} onClick={handleSort}
                disabled={selectedCategory.length>0}>Sort (Asc/Desc)</button>
                <button className={"btn btn-success add-button"} onClick={addProduct}>Add Product</button>
            </div>


            {products ? (products.map((product, index) => {
                    return (
                        <div key={index} className={"product-container"}>
                            <div>
                                <img src={product?.image} alt={"Loading...."} className={"image-container"}/>
                            </div>
                            <div className={"side-container"}>
                                <p className={"category-text"}>{product?.category}</p>
                                <div className={"text-contianer"}>
                                    <div className={"text-inside-container"}>
                                    <p className={"title-text"}>{product?.title}</p>
                                    <p className={"price-text"}>$ {product?.price} /-</p>
                                </div>
                                <p className={"description-text"}>{product?.description}</p>
                            </div>
                            <div className={"button-container"}>
                                <button className={"btn btn-warning"} onClick={() => handleUpdate(product?.id)}>Update</button>
                                <button className={"btn btn-danger"} onClick={() => handleDelete(product?.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
                })) :
                <Loader/>
            }

            <DialogComp open={dialogOpen} onClose={handleClose} product={selectedProduct}
                        categories={categories} updateStat={updateStat}/>
        </>
    )
}

export default Products;
