import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './laptop.jpg'
import './Home.css';
import ReviewItem from '../ReviewItem/ReviewItem';


const Home = () => {

    const reviews = [
        {
            "id": 1,
            "name": "Rakib",
            "ratings": 4,
            "img": "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
            "comment": "The product is very nice and giving me better experience"
        },
        {
            "id": 2,
            "name": "Salman",
            "ratings": 4.2,
            "img": "https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941248?b=1&k=20&m=1335941248&s=170667a&w=0&h=sn_An6VRQBtK3BuHnG1w9UmhTzwTqM3xLnKcqLW-mzw=",
            "comment": "Yeahh!!! the laptop is very cool"
        },
        {
            "id": 3,
            "name": "Niloy",
            "ratings": 4.4,
            "img": "https://media.istockphoto.com/photos/confident-businessman-posing-in-the-office-picture-id891418990?b=1&k=20&m=891418990&s=612x612&w=0&h=b03BA31GLFG5PTaDG1EGcxEPYfnH7ruCaJpBtA9JtxU=",
            "comment": "This is very happy thing to say that the product was very helful for me"
        },
        {
            "id": 4,
            "name": "Akib",
            "ratings": 4.6,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsck-nnNp0FRN4JjPujQH95zYSDhmYnRWIVh72b9HOvtjvSV3ou3cuhBElr9w3QyjKCvo&usqp=CAU",
            "comment": "This is very happy thing to say that the product was very helful for me"
        },
        {
            "id": 5,
            "name": "Akash",
            "ratings": 4.8,
            "img": "https://media.istockphoto.com/photos/shot-of-a-handsome-young-businessman-standing-alone-in-his-office-picture-id1338606557?b=1&k=20&m=1338606557&s=170667a&w=0&h=jU64Sa-G06KGDUNoGJWcxd8G0udFOE_mtYM1I5f7zas=",
            "comment": "This is very happy thing to say that the product was very helful for me"
        },
        {
            "id": 6,
            "name": "Nila",
            "ratings": 5,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYy7jWHtEiERlPEkMaikKcWlY-froYQdnrQ&usqp=CAU",
            "comment": "This is very happy thing to say that the product was very helful for me"
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
                                <p>This is a laptop shop website.Through this website any user can order laptop
                                    very easily.The person who ordered laptop can give a review.Some rehart inclueds in the website of the sell and revenue
                                    it's business.So it is called that any person can easily order a laptop through this website. </p>
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
                    reviews.map(review => <ReviewItem
                        key={review.id}
                        review={review}

                    ></ReviewItem>)
                }
            </div>






        </div>
    );
};

export default Home;