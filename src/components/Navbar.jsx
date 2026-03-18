import React from 'react'

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">

                <a className="navbar-brand">MyStore</a>

                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <button
                            className="btn btn-outline-light me-2"
                            onClick={() => setPage("products")}
                        >
                            Products
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className="btn btn-warning"
                            onClick={() => setPage("cart")}
                        >
                            Cart ({cartCount})
                        </button>
                    </li>

                </ul>

            </div>
        </nav>
    )

}

export default Navbar
