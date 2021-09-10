// ! similar to private route!
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import {useRouter} from 'next/router'
import { isAuth } from './helpers';

const AdminRoute = ({ component: Component, ...rest }) => {
    const router = useRouter();
    return (
        <>
        <h1>Admin Route page/component</h1>
        </>


    // <Route
    //     {...rest}
    //     render={props =>
    //         isAuth() && isAuth().role === 'admin' ? (
    //             <Component {...props} />
    //         ) : (
    //             <Redirect
    //                 to={{
    //                     pathname: '/signin',
    //                     state: { from: props.location }
    //                 }}
    //             />
    //         )
    //     }
    // ></Route>

)
};

export default AdminRoute;
