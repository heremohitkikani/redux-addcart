import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { Link, useParams } from "react-router-dom";



import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";
import Category from './Category';
import Header from './Header';


export default function Catdata() {
    const cart = useParams();
    let cartdata = useSelector((state) => state.counter.alldata);


    return (
        <div>
        <Header></Header>

         <div className='content'>
         <Container>
                <Row>
                    <Col xs={3}><Category></Category></Col>
                    <Col xs={9}>
                        <Row>
                            {
                                cartdata.map((ele, ind) => {
                                    return (
                                        ele.category == cart.id ?
                                            <Col sm={6} className='text-sm-center text-lg-start '>

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
                                            </Col> : <></>
                                    )
                                })
                            }
                        </Row>

                    </Col>
                </Row>
            </Container>
         </div>
        </div>
    )
}
