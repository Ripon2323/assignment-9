import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './laptop.jpg'
import './Home.css';
import ReviewItem from '../ReviewItem/ReviewItem';


const Home = () => {

    const reviews=[
        {
            "id": 1,
            "name": "Rakib",
            "ratings": 4,
            "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
            "comment":"The product is very nice and giving me better experience"
        },
        {
            "id": 2,
            "name": "Salman",
            "ratings": 4.2,
            "img": "https://images.app.goo.gl/7QeeJGk2Njx55D5J7",
            "comment":"Yeahh!!! the laptop is very cool"
        },
        {
            "id": 3,
            "name": "Niloy",
            "ratings": 4.4,
            "img": "https://images.app.goo.gl/jwaZLttSjB6ZyNJx9",
            "comment":"This is very happy thing to say that the product was very helful for me"
        },
        {
            "id": 4,
            "name": "Akib",
            "ratings": 4.6,
            "img": "https://images.app.goo.gl/jradA3wyf3u54FqJ6",
            "comment":"This is very happy thing to say that the product was very helful for me"
        },
        {
            "id": 5,
            "name": "Akash",
            "ratings": 4.8,
            "img": "https://images.app.goo.gl/vh5cJCS4eBRzk9xY7",
            "comment":"This is very happy thing to say that the product was very helful for me"
        },
        {
            "id": 6,
            "name": "Nila",
            "ratings": 5,
            "img": "https://images.app.goo.gl/mrAC5YNKQn",
            "comment":"This is very happy thing to say that the product was very helful for me"
        }
    ]

    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col sm={8} >
                            <div className='header-intro'>
                                <h1 className='laptop-color'>Your next laptop</h1>
                                <h1 className='laptop1-color'>Your best laptop</h1>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div>

                        </Col>
                        <Col sm={4}>
                            <img className='header-img' src={img} alt="" />
                        </Col>
                    </Row>
                </Container>


            </div>

            <div className='review-part'>
                <h1>All Reviews</h1>
                {
                    reviews.map(review=><ReviewItem
                         key={review.id}
                         review={review}
                    
                    ></ReviewItem>)
                }
            </div>

            

            


        </div>
    );
};

export default Home;