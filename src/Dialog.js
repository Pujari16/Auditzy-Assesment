import React, {useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";
import {MenuItem, TextField} from "@mui/material";
import axios from "axios";
import './index.css'


export default function DialogComp (props){

    const {open, onClose, product, categories, updateStat} = props;
    const [title, setTitle] = useState(product?.title);
    const [desc, setDesc] = useState(product?.description);
    const [price, setPrice] = useState(product?.price);
    const [imageUrl, setImageUrl] = useState(product?.image);
    const [category, setCategory] = useState(product?.category);
    const [checkValidations, setValidations] = useState(false);
    const [validate, setValidate] = useState(false);

    const handleTitleChange = (event) =>{
        setValidate(true);
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setValidate(true);
        setDesc(event.target.value);
    }

    const handlePriceChange = (event) => {
        setValidate(true);
        setPrice(event.target.value);
    }

    const handleImageChange = (event) =>{
        setValidate(true);
        setImageUrl(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setValidate(true);
        setCategory(event.target.value);
    }

    const updateProduct = async (productData) => {
        try{
            const resu = await axios.put(`https://fakestoreapi.com/products/${product?.id}`,productData);
            alert("Product Updated Successfully...!");
            onClose();
        }catch (err){
            alert("Not Updated...!");
            console.log(err);
        }
    }

    const addProduct = async (productData) => {
        try{
            const resu = await axios.post(`https://fakestoreapi.com/products`,productData);
            alert("Product Created Successfully...!");
            onClose();
        }catch (err){
            alert("Not Updated...!");
            console.log(err);
        }
    }

    const handleSubmit = () => {
        const data = {
            title: title,
            description: desc,
            price: price,
            image: imageUrl,
            category: category
        }
        if(product == null){
            addProduct(data);
        }
        else{
            updateProduct(data);
        }
    }


    useEffect(() => {
        setValidations((title != null) && (price > 0 && price != null) && (category != null)
        && (price != null) && (imageUrl != null));
    }, [title, desc, imageUrl, category, price]);


    return(
        <Dialog open={open} onClose={onClose} className={"dialog-container"}
                PaperProps={{
                    style: {
                        width: "900px", // Set the desired width for the dialog
                    },
                }}>
            <p className="dialog-text">{product?.category}</p>
            <TextField
                required
                id="outlined-helperText"
                label="Title"
                onChange={handleTitleChange}
                defaultValue={product?.title}
                className="dialog-input"
            />
            <TextField
                required
                id="outlined-helperDesc"
                label="Description"
                onChange={handleDescriptionChange}
                defaultValue={product?.description}
                className="dialog-input"
            />
            <TextField
                required
                id="outlined-helperImage"
                label="Image URL"
                onChange={handleImageChange}
                defaultValue={product?.image}
                className="dialog-input"
            />
            <TextField
                required
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                defaultValue={product?.price}
                onChange={handlePriceChange}
                className="dialog-input"
            />
            <TextField
                required
                label={"Select Category"}
                select
                value={product?.category}
                onChange={handleCategoryChange}
                fullWidth
                className="dialog-input"
            >
                {categories?.map((category, index) => (
                    <MenuItem key={index} value={category}>{category}</MenuItem>
                ))}
            </TextField>
            <div className={"dialog-button-container"}>
                <button className={"btn btn-success dialog-button"} onClick={handleSubmit}
                        disabled={!checkValidations && !updateStat}>Submit</button>
                <button className={"btn btn-warning dialog-button"} onClick={onClose}>Cancel</button>
            </div>

        </Dialog>
    )
}
