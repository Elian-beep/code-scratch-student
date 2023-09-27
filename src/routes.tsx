import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Classroom } from './pages/Classroom';
import './styles/global.css';
import { Layout } from 'components/Layout';
import { CategoryProvider } from 'CategoryProvider';
import { useEffect } from 'react';
import { wakeApi } from 'services/wakeApi';

export const AppRouter = () => {

    useEffect(() => {
        wakeApi();
        // const intervalTime = 30000;
        const intervalTime = 14 * 60 * 1000;
        const intervalId = setInterval(wakeApi, intervalTime);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className='container'>
            <Router>
                <CategoryProvider>
                    <Routes>
                        <Route path='/' element={<Layout />} >
                            <Route index element={<Home />} />
                            <Route path='/p' element={<Profile />} />
                            <Route path='/c/:class_id' element={<Classroom />} />
                        </Route>
                        <Route path='/l' element={<Login />} />
                    </Routes>
                </CategoryProvider>
            </Router>
        </main>
    )
}