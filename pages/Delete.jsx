import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Delete = () => {

    const navigate = useNavigate();
    const id = useSelector((state) => {
        return state.product.id;
      })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3001/delete/${id}`).then((res)=>navigate('/show'))
    }
  
    return (
        <form>
            <div class="alert alert-primary" role="alert">
                Are You Sure You Want to delete???
                <button type="submit" className="btn btn-primary offset-8" onClick={handleSubmit}>Yes</button>
            </div>
            
        </form>
    
  )
}

export default Delete