import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import {useRouter} from 'next/router'
import { isAuth } from './helpers';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const router = useRouter()
    
    
    return (
        <>
        <h1>Not sure</h1>
        </>
//     <Route
//         {...rest}
//         render={props =>
//             isAuth() ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: '/signin',
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     ></Route>
// );
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuth() ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: '/signin',
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     ></Route>
)};

export default PrivateRoute;
