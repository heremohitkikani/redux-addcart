import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { searchdata, allitems } from './store/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import logo from './image/logo.png';
import { FaCartArrowDown, FaStar, FaSearch } from "react-icons/fa";


function Header() {
    let [search, setser] = useState();
    let all = useSelector((state) => state.counter.all);

    const dispatch = useDispatch()
    return (
        <>

            <div className='header mb-4'>
                <Container>
                    <Row className='align-items-center justify-content-between py-3'>
                        <Col md='auto'> <img src={logo} style={{ width: '70px', height: '60px' }} ></img></Col>
                        <Col md='auto'>
                            <Link to='/'><button>HOME</button></Link>
                            <button onClick={() => dispatch(allitems(all))}>all</button>  <input type='text' placeholder='Search here...' onChange={(e) => setser(e.target.value)} ></input>
                            <button onClick={() => dispatch(searchdata(search))}><FaSearch></FaSearch></button>
                        </Col>
                        <Col  md='auto'> <Link to='/Cartdata'><a href=''><FaCartArrowDown></FaCartArrowDown></a></Link></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Header;