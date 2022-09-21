import React from 'react';
import './ReviewItem.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const ReviewItem = ({ review }) => {
  const { name, img, ratings, comment } = review;
  return (
    <div className='card-container'>

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
                 <img src={img} alt="" />
              <Card.Body>
                <Card.Text className='card-text'>
                  <h6>Name:{name}</h6>
                   <h6>Comment:{comment}</h6>
                   <h6>Rating:{ratings}</h6>
                  </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>




  );
};

export default ReviewItem;