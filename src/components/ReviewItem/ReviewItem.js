import React from 'react';



import './ReviewItem.css'



const ReviewItem = ({ review }) => {
  const { name, img, ratings, comment } = review;
  return (
    <div className='review-item'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details">
        <p className="product-name" title={name}>
          Name:{name}
        </p>
        <p>Comment:{comment}</p>
        <p><small>Ratings:{ratings} </small></p>
        
      </div>


    </div>






  );
};

export default ReviewItem;