import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import MainPage from "./components/main/MainPage.jsx";
import Authorization from "./components/authorization/Authorization.jsx";
import Login from "./components/authorization/Login.jsx";
import Registration from "./components/authorization/Registration.jsx";
import Layout from "./components/Layout.jsx";
import {useSelector} from "react-redux";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: 'mainPage',
                    element: <MainPage />,
                },
                {
                    path: 'authorization',
                    element: <Authorization />,
                    children: [
                        {
                            path: 'login',
                            element: <Login />,
                        },
                        {
                            path: 'registration',
                            element: <Registration />,
                        },
                    ],
                },
            ],

        },
    ]);


    return (
        <RouterProvider router={router}/>
    )
}

export default App
