import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './laptop.jpg'
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="container-left">
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

        </div>
    );
};

export default Home;