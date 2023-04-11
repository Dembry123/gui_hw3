import { ProductReview } from "../../models";
import {Rating} from "../common";

export default function ReviewList({reviews}) {
    function makeReviewCard(review) {
        return(
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <Rating value={review.rating}/>

                </div>
            </div>
            <div class="card-body"> 
                <div class="row">
                    <div class="col-md-10">
                        <h5 class="card-title">
                            {review.userName}
                        </h5>
                    </div>
                    <div class="col-md-2 float-right">
                        <p class="card-text">
                            {review.date}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <span class="card-text">
                            {review.comment}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    return(
        <>
            <div class="alert alert-dark" role="alert">
                <h4>
                    Product Reviews ({reviews.length})
                </h4>
            </div>
            <div class="vstack gap-3">
                {reviews.length > 0? reviews.map(makeReviewCard) : <div> Be the first to add a review!</div>}
            </div>
        </>
    )
}
