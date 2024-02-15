import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";

import { carthandler } from './store/Slice';



import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";
import { TbShoppingBagSearch } from "react-icons/tb";
import Header from './Header';



export default function Singlecart() {
    const id = useParams();
    let singledata = useSelector((state) => state.counter.alldata)
    const dispatch=useDispatch()
    console.log(id);
    return (
        <div>
            <Header></Header>
          <div className='content'>
            <Container>
            {
                singledata.map((ele, ind) => {
                    return (
                        ele.id == id.id ?
                            <Col lg={12} >
                                <div style={{ padding: '10px' }} className='mt-0 boxes' >
                                    <Row className=''>
                                        <Col xs={12} lg={6} className='text-center'>
                                            <div className='mb-3 getimg' >
                                                <img src={ele.thumbnail} className='me-4' style={{ borderRadius: '20px', width: '60%', objectFit: 'cover' }}></img>

                                            </div>
                                            <button ><Link to='/Cartdata'>Back to cart</Link></button>

                                            {/* <button className='mt-0' onClick={() => cartdata1(ele.id, ele.price, ele.discountPercentage)}>ADD TO CART</button> */}
                                        </Col>
                                        <Col lg={6}>
                                            <h5 className='mt-3' style={{ fontFamily: 'forte' }}> {ele.title} : -</h5>
                                            <p className='mt-3' style={{ lineHeight: '30px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                                            <h6 className='mt-3'>Price : {ele.price} ₹ ||  Des : {ele.discountPercentage} % <i style={{ color: '#F14B17' }} className='ms-2'><IoMdPricetag  ></IoMdPricetag  > </i></h6>
                                            <h6 className='mt-3'>Rating : {ele.rating}  <i style={{ color: '#D8B338' }} className='ms-2'><FaStar></FaStar></i></h6>
                                            <h6 className='mt-3'>Stock : {ele.stock} . . . <i style={{ color: '#2B5C85' }} className='ms-2'><AiOutlineStock ></AiOutlineStock > </i></h6>
                                            <h6 className='mt-3'>Brand : {ele.brand}<i style={{ color: '#2B5C85' }} className='ms-2'><SiBrandfolder></SiBrandfolder> </i></h6>
                                            <h6 className='mt-3'>Category : {ele.category} <i style={{ color: '#CB6545' }} className='ms-2'><MdCategory></MdCategory> </i></h6>
                                            <Row>

                                                {
                                                    ele.images.map((ele, ind) => {
                                                        return (
                                                            <Col >
                                                                <div className='mt-5 getimg-hover' >
                                                                    <img src={ele} className='w-100' style={{ cursor: 'pointer' }} ></img>
                                                                </div>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>

                                        </Col>
                                    </Row>
                                </div>
                            </Col> : <></>
                    )
                })
            }
            </Container>
          </div>
        </div>
    )
}
