import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-3" style={{
                width: '300px',
                height: '300px',
            }}>
                <img src={product.image} className="card-img-top" alt={product.name} style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    alignSelf: 'center'
                }} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;