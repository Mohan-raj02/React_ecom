import {Button, EditableText} from '@blueprintjs/core'
import React, { useEffect, useState } from "react"
// import {toast} from 'react-toastify'


export default function Products(){

    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);  // State to show/hide modal
    const [selectedProduct, setSelectedProduct] = useState(null);  // State for the product to be updated

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/products')
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleUpdateClick = (product) => {
        setSelectedProduct(product);  // Set the selected product for the modal
        setShowModal(true);  // Show modal
    };

    const addProduct = () =>{
        setSelectedProduct(null);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);  // Hide modal
        setSelectedProduct(null);  // Clear selected product
    };

    // const insertProduct = (data) => {
    //     fetch(process.env.REACT_APP_API_URL+'/products',{
    //         method: "POST",
    //         headers: {"Content-Type" : "application/json"},
    //         body: JSON.stringify(data)
    //     })
    // }

    function deleteProduct(){

    };

    return (
        <div>
            <h1>Products</h1>
            {/* Check if there are products to display */}
            {products.length > 0 ? (
            <table class="table table-striped" border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Ratings</th>
                        <th>Category</th>
                        <th>Seller</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.ratings}</td>
                        <td>{product.category}</td>
                        <td>{product.seller}</td>
                        <td>{product.stock}</td>
                        <td>
                            {product.images && product.images.length > 0 && product.images[0] && product.images[0].image ? (
                                <img
                                    src={product.images[0].image} 
                                    alt={product.name}
                                    height="50"
                                    width="50"
                                />
                            ) : (
                                 <span>No image</span> // Fallback text if no image exists
                            )} 
                        </td>
                        <td>
                            <Button onClick={() => handleUpdateClick(product)} style={{width: '70%', marginBottom: "5px", textAlign: "center"}} intent='primary'>UPDATE</Button>
                            <Button style={{width: '70%', textAlign: "center"}} intent='danger'>DELETE</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tr>
                    <td colSpan="9" style={{ textAlign: 'center', padding: '20px' }}>
                        <Button onClick={addProduct} intent='success' style={{ width: '300px', border: '1px solid black' }}>
                            ADD ITEM
                        </Button>
                    </td>
                </tr>
            </table>
            ) : (
            <p>Loading products...</p>
            )}
               { showModal && (
                <>
                    {/* Modal backdrop for dimming */}
                    <div className="modal-backdrop fade show"></div>

                        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}> 
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"> {selectedProduct ? 'Update Product' : 'Add Item'}</h5>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <label>Name</label>
                                    <input type="text" defaultValue={selectedProduct ? selectedProduct.name : ""} className="form-control" />
                                    <label>Price</label>
                                    <input type="text" defaultValue={selectedProduct ? selectedProduct.price : ""} className="form-control" />
                                    <label>description</label>
                                    <textarea type="text" rows="4" defaultValue={selectedProduct ? selectedProduct.description : ""} className="form-control" ></textarea>
                                    <label>category</label>
                                    <input type="text" defaultValue={selectedProduct ? selectedProduct.category : ""} className="form-control" />
                                    <label>seller</label>
                                    <input type="text" defaultValue={selectedProduct ? selectedProduct.seller : ""} className="form-control" />
                                    <label>stock</label>
                                    <input type="number" defaultValue={selectedProduct ? selectedProduct.stock : ""} className="form-control" />
                                    <hr/>
                                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                                    <input type="file" class="form-control" id="inputGroupFile01"></input>
                                </div>
                                <div className="modal-footer">
                                    <Button intent="primary" onClick={closeModal}>Save changes</Button>
                                    <Button intent="secondary" onClick={closeModal}>Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
      </div>
    );
} 