import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom';
import Learning from './routes/Learning.jsx';
import Exercises from './routes/Exercises.jsx';
import Contests from './routes/Contests.jsx';
import Contact from './routes/Contact.jsx';
import Test from "./content/test.mdx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/learning", element: <Learning /> },
  { path: "/exercises", element: <Exercises /> },
  { path: "/contests", element: <Contests /> },
  { path: "/contact", element: <Contact /> },
  { path: "/learning/test", element: <Test /> },
]);