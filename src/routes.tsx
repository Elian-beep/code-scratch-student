import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Classroom } from './pages/Classroom';
import './styles/global.css';
import { Layout } from 'components/Layout';

export const AppRouter = () => {
    return (
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path='/p' element={<Profile />} />
                        <Route path='/c/:class_id' element={<Classroom />} />
                    </Route>
                    <Route path='/l' element={<Login />} />
                </Routes>
            </Router>
        </main>
    )
}