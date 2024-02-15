import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";



function Category() {
  let category = useSelector((state) => state.counter.category);
  console.log(category);

  return (
    <div>
      <h5 style={{ fontFamily: 'forte', padding: '5px 0', borderTop: '2px solid rgb(85, 84, 84)', borderBottom: '2px solid rgb(85, 84, 84)' }} className='text-center mb-4'>CATEGORIES</h5>
      {
        category.map((ele, ind) => {
          
          return (

            <ul className='category'>
              <Link to={`/category/${ele}`} style={{ color: 'black', textDecoration: 'none' }}><li style={{ cursor: 'pointer', fontFamily: 'Comic Sans MS' }}>{ele}</li> </Link>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Category
