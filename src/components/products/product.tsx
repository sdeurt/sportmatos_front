import { ChangeEvent, useEffect, useState } from "react";
import { TProduct } from "../../types/Tproduct";
import { NO_PRODUCT } from "../../constants/NoProduct";
import { TResponse } from "../../types/TResponse";
import { BASEURL } from "../../constants/base_url";
import { DEFAULT_PRODUCT } from "../../constants/DefaultProduct";
import { ProductView } from "./ProductView";
import { ProductNew } from "./ProductNew";
import { useNavigate } from "react-router-dom";
import "./style.css";

export function Products() {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [product, setProduct] = useState<TProduct>(NO_PRODUCT);

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`${BASEURL}products`);
            const responseJSON: TResponse<TProduct[]> = await response.json();
            setProducts(responseJSON.data);
            console.log(responseJSON.data);

        };
        fetchData();
    }, []);
    
    const navigate = useNavigate();

    const selectProduct = products.map((item, i) =>
        <div className="col-12 col-sm-4 col-md-3 p-2">
            <div className="card p-1 shadow-sm border-primary">
                <img src={`./imgsport/${item.name}.jpg`} width='auto' height='100px' className="card-img-top img-product" alt="..." onClick={() => setProduct(item)} />
                <hr />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <a onClick={() => setProduct(item)} className="btn btn-info">Voir détail</a>
                    <hr />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check-fill " viewBox="0 0 16 16" onClick={() => navigate("/panier")} >
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                </div>
            </div>
        </div>

    );

    const myData = products.map((product, category) => ({ ...product, category }));
    const [filteredData, setFilteredData] = useState(myData);

    function filterData(e: React.KeyboardEvent<HTMLInputElement>) {
        const q = (e.target as HTMLInputElement).value.toLowerCase();
        const filteredRecords = myData.filter(item => item.name.toLowerCase().includes(q));
        setFilteredData(filteredRecords);
    }





    return (
        <>

            <div>

                {product.id === 0 && <div className=" p-2 m-1 d-xs-flex ">

                    <div className="container shadow-sm border-primary">
                        <div className="search_box  w-50  m-auto  row p-2 d-xs-flex ">
                            <input type="text" onKeyUp={filterData} className="searchCtrl rounded " placeholder="Search the list " />
                        </div>
                        <div className="box text-info text-center">
                            {filteredData && filteredData.length > 0 ? (
                                <ul className="list text-info">
                                    {filteredData.map((item,index) =>
                                        <ol key={index}>{item.name}</ol>
                                    )}
                                </ul>
                            ) : <div className="message"></div>
                            }
                        </div>
                        <div className="row" >{selectProduct}</div>
                    </div>
                </div>}

                {product.id > 0 && <>
                    <ProductView item={product} />
                    <a onClick={() => setProduct(NO_PRODUCT)} className="btn btn-info text-center " >Back</a>
                </>}
            </div>
        </>
    );

}



