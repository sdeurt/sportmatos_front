import { useEffect, useState } from "react";




export default function Product() {
    const [product, setProduct] = useState ([]);
    const [name, setName] = useState("");
    const [price, SetPrice] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");

} 

useEffect(() => {
    const fetchData = async () => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        const result = await fetch(`http://localhost:3000/api/product/`, options);
        const response = await result.json();
        console.log(response);
    };
    fetchData()
}, []);

async function createProduct() {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  })
    }
    const result = await fetch(`http://localhost:3000/api/product/`, options);
    const newProduct = await result.json();
    newProduct([... newProduct]);
   // setShowInput(false)
}