import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    return (
        <li className="product-card">
            <a href={product.url} className="product-link" title={product.name}>
                <div className="product-img-container">
                    {/* Ảnh khung ưu đãi nếu có */}
                    {product.frameImgSrc && (
                        <img
                            className="product-frame"
                            src={product.frameImgSrc}
                            alt="Khung ưu đãi"
                        />
                    )}
                    <img
                        className="product-img"
                        src={product.imgSrc}
                        alt={product.name}
                    />
                </div>

                <h3 className="product-name">{product.name}</h3>

                <div className="product-price">
                    <span className="price">{product.specialPrice}</span>
                    {product.oldPrice && (
                        <span className="old-price">{product.oldPrice}</span>
                    )}
                    {product.discountPercent && (
                        <span className="discount">{product.discountPercent}</span>
                    )}
                </div>

                {product.soldQty > 0 && (
                    <div className="sold">Đã bán {product.soldQty}</div>
                )}
            </a>
        </li>
    );
};

export default ProductCard;
