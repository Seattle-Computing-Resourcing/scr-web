import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom';
import Learning from './routes/Learning.jsx';
import Exercises from './routes/Exercises.jsx';
import Contact from './routes/Contact.jsx';

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/learning", element: <Learning /> },
    { path: "/exercises", element: <Exercises /> },
    { path: "/contact", element: <Contact /> },
]);