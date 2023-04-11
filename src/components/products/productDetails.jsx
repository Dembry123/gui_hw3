
import { useEffect, useState } from "react";
import { Product, ProductReview } from "../../models";
import { API } from "../../api/productsApi";
import {ReviewForm, ReviewList} from "../products";

export default function ProductDetails() {
    const [product, setProduct] = useState(new Product(0,"","",0,"", []));
    useEffect(() => {
        API.getProductById(1).then(response => {
            setProduct(response);
        });
    }, []);

    function addReview(userName, rating, comment, date) {
        var productCopy = {...product};
        var newReview = new ProductReview(userName, rating, comment, date);

        productCopy.reviews.push(newReview);
        setProduct(productCopy);
    }
    return (
        <>
            <div class="vstack gap-3"> 

            {/* begin breadcrumbs */}
                <div class="bg-light"> 
                    <div class="alert alert-dark" role="alert">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> 
                                    <a href="#">Tasty Snacks</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    {product.name}
                                </li>
                            </ol>
                        </nav> 
                    </div>
                </div>
            {/* end breadcrumbs */}
            {/* begin description */}
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img src={product.imageUrl} alt="product image" class="card-img-top"/>
                        </div>
                        <div class="col-md-8">
                            <h1 class="card-title">
                                {product.name}
                            </h1>
                            <h3>
                                <p class="badge bg-primary">
                                    ${product.price}
                                </p>
                            </h3>
                            <p class="card-text">
                                <small class="text-muted">
                                    {product.description}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end description */}
            {/* begin review list */}
            <div class="bg-light">
                <ReviewList reviews={product.reviews}/>
            </div>
            <div class="bg-light">
                <ReviewForm onReviewAdded={addReview}/>
            </div>
            </div>
        </>
    );

}