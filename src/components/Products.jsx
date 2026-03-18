import { useEffect, useState } from "react";

function Products({ addToCart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (

        <div className="row">

            {products.map(product => (

                <div className="col-md-3 mb-4" key={product.id}>

                    <div className="card h-100">

                        <img
                            src={product.image}
                            className="card-img-top"
                            style={{ height: "200px", objectFit: "contain" }}
                        />

                        <div className="card-body">

                            <h6>{product.title}</h6>
                            <p>${product.price}</p>

                            <button
                                className="btn btn-primary"
                                onClick={() => addToCart(product)}
                            >
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

            ))}

        </div>

    )

}

export default Products;