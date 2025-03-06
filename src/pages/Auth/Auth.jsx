import React from 'react'
import login_logo from "../../assets/images/newLogo.png";
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'

const Auth = () => {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img src={login_logo} alt="amazon logo" />
      </Link>
      {/* logo in form */}
      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login__signInButton}>Sign in</button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to AMAZON FAKE CLONE conditions of use and
          sale.Please see our privacy Notice,our cookies Notice and our
          Interest-based Ads Notice.
        </p>
        {/* create account btn  */}
        <button className={classes.login__registerButton}>
            Create Your Amazon Account
        </button>
        
      </div>
    </section>
  );
 
}

export default Auth