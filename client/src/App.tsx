import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/profile/Profile';

//components
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
        ],
    },
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/auth/login',
        element: <Login />,
    },
    {
        path: '/auth/register',
        element: <Register />,
    }
]);

function App() {
    return (
        <div className='App-outR'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
