import React from 'react';
import { signInWithGoogle, signInWithGithub } from './fire';

const Login = (props) => {

    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError, passwordError } = props;
    return (
        <section className="login">
            <div className="loginContainer">

                <label>Username</label>
                <input type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p><br />
                            <h2> You Can Signin With </h2>

                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>

                        </>
                    )}


                </div>
                <div className="Signin buttons">
                    <button onClick={signInWithGoogle} >Google</button><br /><br /> &nbsp;&nbsp;
                    <button onClick={signInWithGithub}> Github</button>
                    {/* <button onClick = {signInWithFacebook} >Facebook</button> */}
                </div>

            </div>



        </section>
    )
};

export default Login;