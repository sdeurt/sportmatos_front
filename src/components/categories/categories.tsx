import { useEffect, useState } from "react";
import { TCategory } from "../../types/TCategory";
import { BASEURL } from "../../constants/base_url";
import { TResponse } from "../../types/TResponse";
import { ProductView } from "../products/ProductView";



export default function Category() {

    const [category, setCategory] = useState<TCategory[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`${BASEURL}categories`);
            const responseJSON: TResponse<TCategory[]> = await response.json();
            setCategory(responseJSON.data);
            console.log(responseJSON.data);

        };
        fetchData();
    }, []);

    const selectCategory = category.map((item, i) =>
    <div className="col-12 col-sm-4 col-md-3 p-2">
        <div className="card p-1 shadow-sm border-primary">
            <img src={`./imgsport/${item.name}.jpg`} width='auto' height='100px' className="card-img-top img-product text-light" alt={item.name} onClick={() => setProduct(item)}/>
            <hr />
                <div className="card-body ">
                    
                  <p className="card-text">{item.name}</p>
               
                <a onClick={() => setCategory(item.data)} className="btn btn-info">Voir détail</a>
              
            </div>
        </div>
    </div>
);


    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };


    return (
   
        <div>

        { <div className="p-2 m-1 d-xs-flex">
            <div className="container">
                <div className="row" >{selectCategory}</div>
            </div>
        </div>}

    </div>
);
}
function setProduct(item: TCategory): void {
}

