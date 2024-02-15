import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { IoMdPricetag } from "react-icons/io";
import { increment, decrement, removecart } from './store/Slice';
import logo from './image/logo.png';
import { FaCartArrowDown, FaStar, FaSearch } from "react-icons/fa";

import Header from './Header';




function Cartdata() {

    const dispatch = useDispatch()
    let cartdata = useSelector((state) => state.counter.cartdata);
    let incre = useSelector((state) => state.counter.incre);
    let allprice = useSelector((state) => state.counter.allprice);
    let totalprice = useSelector((state) => state.counter.totalprice);
    let netprice = useSelector((state) => state.counter.netprice);
    let nettotal = useSelector((state) => state.counter.nettotal);
    console.log(cartdata);

    const increm = (ind, price, disc) => {
        dispatch(increment({ ind: ind, price: price, disc: disc }))
    }
    const decrem = (ind, price, disc) => {
        dispatch(decrement({ ind: ind, price: price, disc: disc }))
    }
    const removedata = (i, price, ind) => {
        console.log(i);
        dispatch(removecart({ ind: ind, id: i, price: price }))
    }
    return (
        <div>
            <div className='header'>
                <Container>
                    <Row className='justify-content-between align-items-center py-3 '>
                        <Col sm='auto'>
                            <div>
                                <img src={logo} style={{ width: '70px', height: '60px' }} ></img>
                            </div>
                        </Col>
                        <Col sm='auto' className='text-center '>
                            {/* <button onClick={alldata}>ALL</button> */}
                            <div className="d-flex align-items-center">
                                <Link to='/'><button>HOME</button></Link>
                                <h4 style={{ padding: '0 20px', fontFamily: 'forte' }}>TOTAL = {totalprice} ₹ ||  NETT = {nettotal.toFixed(2)} ₹</h4>
                            </div>


                            {/* <input type='text' placeholder='SEARCH HERE...'></input>
                            <button>SEARCH</button> */}
                        </Col>
                        <Col sm='auto' className='text-end'>
                            <a href=''><FaCartArrowDown></FaCartArrowDown></a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='content'>
                <Container>
                    <Row>
                        {
                            cartdata.map((ele, ind) => {
                                return (
                                    <Col sm={6} className='text-sm-center text-lg-start '>
                                        <>
                                            <div style={{ padding: '10px' }} className='mt-4 boxes' >
                                                <Row className=' '>
                                                    <Col lg={6}>
                                                        <div><img src={ele.thumbnail} className='w-100' style={{ borderRadius: '20px', height: '300px', objectFit: 'cover' }}></img></div>
                                                    </Col>
                                                    <Col lg={6} style={{ color: 'black' }}>
                                                        <h5 style={{ fontFamily: 'forte', color: 'black', textDecorationLine: 'none' }} className='mt-sm-5 mt-lg-0 mb-4'> id : - {ele.id}</h5>
                                                        <h5 style={{ fontFamily: 'forte', color: 'black', textDecorationLine: 'none' }} className='mt-sm-5 mt-lg-0 mb-4'> {ele.title} : -</h5>
                                                        <p style={{ fontFamily: 'Comic Sans MS', lineHeight: '35px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                                                        <h6 className='my-3'>Price : {ele.price} ₹ ||  Des : {ele.discountPercentage} % <i style={{ color: '#F14B17' }} className='ms-2'><IoMdPricetag  ></IoMdPricetag  > </i></h6>

                                                        <Link to={`${ele.id}`} style={{ color: 'transparent' }}>


                                                            <h6 style={{ borderBottom: '2px solid black', width: '145px', paddingBottom: '5px', color: 'black' }}>Click on for more..</h6>      </Link>

                                                    </Col>
                                                </Row>
                                            </div>


                                        </>

                                        <div className="ms-1">
                                            <button onClick={() => removedata(ele, ele.price, ind)}>remove from cart</button>

                                            {/* <button onClick={() => removedata(ele, ele.price, ind)}>remove from cart</button> */}
                                            <button onClick={() => increm(ind, ele.price, ele.discountPercentage)}>+</button>
                                            <input className="inputnumber" type="text" value={incre[ind]} style={{ width: '40px' }}></input>
                                            <button onClick={() => decrem(ind, ele.price, ele.discountPercentage)}>-</button>

                                            <font style={{ fontWeight: 'bold' }} className='netprice ms-3' >TOTAL = {allprice[ind]} ₹ || net = {netprice[ind].toFixed(2)} ₹ </font>
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
            <h1>total={totalprice}</h1>
            <h1>nettotal={nettotal.toFixed(2)}</h1>
        </div>
    )
}

export default Cartdata
