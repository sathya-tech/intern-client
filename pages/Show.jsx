import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { setId } from './store/Slice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Show = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
        
    const [data, setData] = useState([]);
    const {id} = useSelector((state) => {
        return state.product;
      })

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("http://localhost:3001/show")
                .then((res) => {
                    setData(res.data);
                });
        }
    
        fetchData();
        
    },[data])


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <h1 className="col-md-6 offset-3">CUSTOMER LIST</h1>
                    <div className="">
                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>{navigate('/create')}}>Add customer</button>
                    
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col" colSpan="2">Email</th>
                                    <th scope="col">Phone</th>

                                </tr>
                            </thead>
                        
                            {data?.map(item => (
                                <tbody>
                                    <tr>
                                        <td>{item.first_name} </td>
                                        <td>{item.last_name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                        <td colSpan="2">{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><button type="button" className="btn btn-danger btn-sm" onClick={() => { dispatch(setId(item.uuid));navigate('/edit') }}>edit</button></td>
                                        <td><button type="button" className="btn btn-danger btn-sm" onClick={(e) => { dispatch(setId(item.uuid)); navigate('/delete'); }}>delete</button></td>
                                    </tr>
                                </tbody>    
                            ))}
                            
                        </table> 
                    </div>
                </div>
            </div>

        </>
    )
}

export default Show