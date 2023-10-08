import { Link, useNavigate } from "react-router-dom";
import { useContext, useReducer } from "react";
import swal from 'sweetalert';
import LoginSocial from "./LoginSocial";
import { AuthContext } from "../Provider/AuthProvider";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
const Login = () => {
    const emailRef = useReducer(null)
    const navigate = useNavigate()
    const {singIn, resetPassword} = useContext(AuthContext)
    
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        // login user
        singIn(email, password)
        .then(()=>{
            e.target.reset()
            swal("Good job!", "Login successful!", "success");
            navigate('/')
        })
        .catch(error=> {
            console.error(error);
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        })
    }
    const handleResetPassword = () => {
        const email = emailRef.current.value
        if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            swal ( "Oops" ,  "please enter valid email!" ,  "error" )
        }
        else{
            resetPassword(email)
            swal ( "Check email" ,  "please check email and set new password!" ,  "success" )
        }
    }
    return (
        <>
            <Header/>
            <div className="hero min-h-[70vh] my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                ref={emailRef}
                                name="email" 
                                required 
                                placeholder="Email" 
                                className="input input-bordered" 
                            />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt link link-hover" onClick={handleResetPassword}>Forgot password?</p>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="my-5 text-xs text-center font-bold">New here? Please <Link to={'/register'} className="text-blue-600 underline">Registration</Link></p>
                            <LoginSocial/>
                        
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Login;