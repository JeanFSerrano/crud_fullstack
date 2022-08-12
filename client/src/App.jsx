import Navbar from './components/navbar/Navbar'
import Registration from './components/registration/Registration'
import { Routes, Route } from 'react-router-dom'
import Delete from './components/delete/Delete'
import Update from './components/update/Update'

function App() {

    return (
        <div className="App">
            <Navbar />


            <Routes>
                <Route path='/' element={<Registration />} />
                <Route path='/remove' element={<Delete />} />
                <Route path='/update' element={<Update />} />

            </Routes>

        </div>
    )
}

export default App
