import React, { Fragment } from 'react';

import Link from 'next/link';
import { isAuth, signout } from '../auth/helpers';

const Layout = ({ children, match, history }) => {

    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link href="/" className="nav-link">
                    Home
                </Link>
            </li>

            {!isAuth() && (
                <Fragment>
                    <li className="nav-item">
                        <Link href="/signin" className="nav-link">
                            Signin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/signup" className="nav-link">
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuth() && isAuth().role === 'admin' && (
                <li className="nav-item">
                    <Link className="nav-link" href="/admin">
                        {isAuth().name}
                    </Link>
                </li>
            )}

            {isAuth() && isAuth().role === 'subscriber' && (
                <li className="nav-item">
                    <Link className="nav-link" href="/private">
                        {isAuth().name}
                    </Link>
                </li>
            )}

            {isAuth() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: 'pointer', color: '#fff' }}
                        onClick={() => {
                            signout(() => {
                                history.push('/');
                            });
                        }}
                    >
                        Signout
                    </span>
                </li>
            )}
        </ul>
    );

    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default Layout;
