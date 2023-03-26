import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";
import Register from './pages/Register'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/Single";
import Write from "./pages/Write";
import './style.scss'


const Layout = () => {   // using outlet from react-dom to nested those components
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {    //using to show the particular pages with nested components
        path: "/",
        element: <Layout />,  //nested components
        children: [
            {
                path: '/',
                element: <Home />  //this page will show those nested components
            },
            {
                path: '/post/:id',   //creating specific id like http://localhost:3000/post/123
                element: <Single />
            },
            {
                path: '/write',
                element: <Write />
            },
        ]
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
  return (
    <div className='app'>
        <div className='container'>
            <RouterProvider router={router} />
        </div>
    </div>
  );
}

export default App;
