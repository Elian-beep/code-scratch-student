import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Classroom } from './pages/Classroom';
import './styles/global.css';

export const AppRouter = () => {
    return (
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/l' element={<Login />} />
                    <Route path='/p' element={<Profile />} />
                    <Route path='/c' element={<Classroom />} />
                </Routes>
            </Router>
        </main>
    )
}