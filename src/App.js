import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Posts from './Posts';
// import Comments from './Comments';
// import Albums from './Albums';
// import Photos from './Photos';
// import Todo from './Todo';
// import User from './User';
import Home from './Home';
import Singleitem from './Singleitem';
import Catdata from './Catdata';
import { datahandler,datacategory } from './store/Slice';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Cartdata from './Cartdata';
import Singlecart from './Singlecart';






function App() {
  const dispatch = useDispatch()

  useEffect(() => {

    axios.get('https://dummyjson.com/products?limit=100&skip=0')
        .then(function (response) {

            console.log(response.data.products);
        dispatch(datahandler(response.data.products))


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })


    axios.get('https://dummyjson.com/products/categories')
        .then(function (response) {

            console.log(response.data);
            console.log(response);
            dispatch(datacategory(response.data))
            // setall(response.data)
            // setall(response.data.results)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}, [])
  
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Singleitem/:id" element={<Singleitem />} />
        <Route path="/category/:id" element={<Catdata />} />
        <Route path="/Cartdata" element={<Cartdata />} />
        <Route path="/Cartdata/:id" element={<Singlecart />} />
        

      </Routes>
    </div>
  );
}

export default App;
