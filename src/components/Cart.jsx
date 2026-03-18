import React from "react";

function Cart({ cart, removeFromCart }) {

    return (

        <div>

            <h3>Your Cart</h3>

            {cart.length === 0 && <p>No items in cart</p>}

            {cart.map((item, index) => (

                <div
                    className="card mb-3"
                    key={index}
                >

                    <div className="row g-0">

                        <div className="col-md-2">
                            <img
                                src={item.image}
                                className="img-fluid"
                                style={{ height: "100px" }}
                            />
                        </div>

                        <div className="col-md-8">

                            <div className="card-body">
                                <h6>{item.title}</h6>
                                <p>${item.price}</p>
                            </div>

                        </div>

                        <div className="col-md-2 d-flex align-items-center">

                            <button
                                className="btn btn-danger"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </div>

            ))}

        </div>

    )

}

export default Cart;