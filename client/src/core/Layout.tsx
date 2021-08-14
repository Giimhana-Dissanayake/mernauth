import React, { FC, Fragment } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { isAuth, signout } from "../auth/helper";
import './../default.css'


const Layout: FC = (props) => {

  const history = useHistory();

  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <NavLink to="/" exact className="text-light nav-link">
          Home
        </NavLink>
      </li>
      {
        !isAuth() && <>
        <li className="nav-item">
        <NavLink to="/signin" className="text-light nav-link">
          Signin
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/signup" className="text-light nav-link">
          SignUp
        </NavLink>
      </li>
        </>
      }
        {
        isAuth() &&
        <li className="nav-item text-center p-2" style={{cursor:'pointer'}}>
         {isAuth().name}
      </li>     
      }
        {
        isAuth() &&
        <li className="nav-item text-center p-2" style={{cursor:'pointer'}} onClick={() =>{
          signout(()=>{
            history.push('/')
          })
        }}>
          Signout
      </li>     
      }

    </ul>
  );

  return (
    <Fragment>
      {nav()}
      <div className="container">{props.children}</div>
    </Fragment>
  );
};

export default Layout;
