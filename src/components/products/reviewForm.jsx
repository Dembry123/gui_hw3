import { TextAreaField, TextField, SelectField, Rating } from "../common";
import { useState } from "react";

export default function ReviewForm({onReviewAdded}) {
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [ratingOptions, setRatingOptions] = useState([
        {value:1, label:"1 Star"},
        {value:2, label:"2 Stars"},
        {value:3, label:"3 Stars"},
        {value:4, label:"4 Stars"},
        {value:5, label:"5 Stars"}

    ]);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const dateString = `${months[month]} ${day}, ${year}`;


    return (
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Add Review
                </h3>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-8">
                            <TextField label="Your Name" value={userName} setValue={setUserName}/>
                        </div>
                        <div class="col-md-2">
                            <SelectField label="Rating" value={rating} setValue={setRating} options={ratingOptions} optionValueKey="value" optionLabelKey="label"/>
                        </div>
                        <div class="col-md-2">
                            <Rating value={rating}/>
                        </div>
                    </div>
                    <TextAreaField label="comment" value={comment} setValue={setComment}/>
                    <br></br>
                    <button type="button" class="btn btn-primary" onClick={() => {
                        onReviewAdded(userName, rating, comment, dateString);
                        setRating(0);
                        setUserName("");
                        setComment("");
                    }}>Submit</button>
                </form>
            </div>
        </div>
    )
}