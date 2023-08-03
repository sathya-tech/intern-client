import React, { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Show from './pages/Show'
import Create from './pages/Create'
import Update from "./pages/Update";
import Delete from './pages/Delete.jsx'
import { Provider } from 'react-redux'
import store from './pages/store/store'

const App = () => {

  const [id, setId] = useState("");

  const changeId = (id) => {
    setId(id);
  }

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/show" element={<Show />} />
                <Route path="/create" element={<Create/>} />
                <Route path="/edit" element={<Update/>} />
                <Route path="/delete" element={<Delete />} />
            </Routes>
          </BrowserRouter>
      </Provider>
        
    </>
  )
}

export default App