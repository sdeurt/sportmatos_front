import { useState } from "react";
import { TResponse } from "../../types/TResponse";
import { BASEURL } from "../../constants/base_url";
import { NO_PRODUCT } from "../../constants/NoProduct";
import { TProduct } from "../../types/Tproduct";


export function ProductNew(props: {
    products: TProduct[],
    setProducts: (value: TProduct[]) => void,
    setProduct: (value: TProduct) => void
}) {

    const { products, setProducts, setProduct } = props

    const [item, setItem] = useState<TProduct>({
        id: -1,
        category: "Nouvelle catégorie",
        name: "Nouveau produit",
        description: "Nouvelle description",
        price: 0,
        quantity: 1,
        image: "Nouvelle image",
        stock: 2

    });

    const itemHandlerTextuel = (key: "name" | "description" | "image", value: string) => {
        const newItem = { ...item };
        newItem[key] = value;

        setItem(newItem);
    };
    const itemHandlerNumeric = (key: "price" | "quantity" | "stock", value: number) => {
        const newItem = { ...item };
        newItem[key] = value;
        /* 
        if (key === "prix"){
          newItem.prix = value
        } else {
          newItem.quantite = value
        }
         */
        setItem(newItem);
    };

    const createNewProduct = async () => {
        console.log(item);
        const { id, ...leReste } = item
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leReste)
        };

        const response = await fetch(`${BASEURL}products`, options)
        const responseJSON: TResponse<TProduct> = await response.json()

        const newProducts = [...products];
        const newProduct = responseJSON.data;
        newProducts.push(newProduct);
        setProducts(newProducts)
        setProduct(newProduct)

    }

    return (
        <div className="bg-info rounded p-2 m-1">
            <div>
                <label htmlFor="produitNom"> Nom : </label>
                <input
                    name="produitNom"
                    type="text"
                    defaultValue={item.name}
                    onChange={(e) => itemHandlerTextuel("name", String(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor="produitdescription"> description : </label>
                <input
                    name="produitdescription"
                    type="text"
                    defaultValue={item.description}
                    onChange={(e) => itemHandlerTextuel("description", String(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor="imageUrl"> imageUrl : </label>
                <input
                    name="imageUrl"
                    type="URL"
                    defaultValue={item.image}
                    onChange={(e) => itemHandlerTextuel("image", String(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="produitPrix"> Prix : </label>
                <input
                    name="produitPrix"
                    type="number"
                    min={0}
                    defaultValue={item.price}
                    onChange={(e) => itemHandlerNumeric("price", Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="produitQuantite"> Quantité : </label>
                <input
                    name="produitQuantite"
                    type="number"
                    defaultValue={item.quantity}
                    onChange={(e) =>
                        itemHandlerNumeric("quantity", Number(e.target.value))
                    }
                />
            </div>
            <div>
                <label htmlFor="produitStock"> Stock: </label>
                <input
                    name="produitStock"
                    type="number"
                    defaultValue={item.stock}
                    onChange={(e) =>
                        itemHandlerNumeric("stock", Number(e.target.value))
                    }
                />
            </div>
            <button onClick={() => { setProduct(NO_PRODUCT) }}>Annuler la création</button>
            <button onClick={createNewProduct}>Enregister</button>
        </div>
    );
}