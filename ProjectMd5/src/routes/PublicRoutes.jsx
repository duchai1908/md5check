import { createBrowserRouter } from "react-router-dom";
import React from "react";
import LoadLazy from "../components/LoadLazy";

const Home = React.lazy(() => import("../page/user/home"));
const Contact = React.lazy(() => import("../page/user/contact"));
const About = React.lazy(() => import("../page/user/about"));


const PublicRoutes = [
    {
        path: "/",
        element: <LoadLazy children={<Home/>} />
    },
    {
        path: "/contact",
        element: <LoadLazy children={<Contact/>} />
    },
    {
        path: "/about",
        element: <LoadLazy children={<About/>} />
    }
];

export default PublicRoutes