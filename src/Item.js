
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Category from './Category';

function Item() {
    let alldata = useSelector((state) => state.counter.alldata);
    console.log(alldata);


    return (
        <>
          <div className='content mt-4'>
          <Container>
           <Row >
                <Col xs={3}>
                    <Category></Category>
                </Col>
                <Col xs={9}>
                    <Row>
                        {
                            alldata.map((ele, ind) => {
                                return (
                                    <Col  xl={6} className='text-sm-center text-lg-start '>

                                        <div style={{ padding: '10px' }} className='mt-4 boxes' >
                                            <Row className=' '>
                                                <Col lg={6}>
                                                    <div><img src={ele.thumbnail} className='w-100' style={{ borderRadius: '20px', height: '300px', objectFit: 'cover' }}></img></div>
                                                </Col>
                                                <Col lg={6} style={{ color: 'black' }}>
                                                    <h5 style={{ fontFamily: 'forte', color: 'black', textDecorationLine: 'none' }} className='mt-sm-5 mt-lg-0 mb-4'> {ele.title} : -</h5>
                                                    <p style={{ fontFamily: 'Comic Sans MS', lineHeight: '35px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                                                    <Link to={`/Singleitem/${ele.id}`} style={{ color: 'transparent' }}>

                                                        <h6 style={{ borderBottom: '2px solid black', width: '145px', paddingBottom: '5px', color: 'black' }}>Click on for more..</h6>      </Link>

                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='ms-5'>
                                            {/* <button onClick={() => cartdata1(ele, ele.price,ele.discountPercentage)}>ADD TO CART</button> */}
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </Col>
            </Row>
           </Container>
          </div>
        </>
    )
}
export default Item