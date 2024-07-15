import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/images/login/login.svg"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
    const { createUserByEmail, signInByGoogle, profileUpdate } = useContext(AuthContext)
    const handleSignUpForm = e => {
        e.preventDefault();

        const form = e.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password);

        createUserByEmail(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
        profileUpdate(name)

    }

    const handleGoogleSignUp = () => {
        signInByGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero min-h-screen font-inter">
            <div className="hero-content w-full p-0 flex-col lg:flex-row gap-16">
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 border p-[75px]">
                    <form className="card-body p-0" onSubmit={handleSignUpForm}>
                        <h1 className="text-[40px] font-semibold text-center">Sign Up</h1>
                        <div className="form-control mt-10">
                            <label className="label">
                                <span className="text-lg font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Your password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <input type="submit" className="btn btn-orange" value="Sign Up" />
                        </div>
                    </form>
                    <div className="">
                        <p className="text-lg text-[#444444] text-center font-medium mt-[30px]">Or Sign Up with</p>
                        <div className="flex justify-center gap-4 mt-[30px]">
                            <button className="btn btn-circle">
                                <FaFacebookF className="text-[#3B5998] text-xl"></FaFacebookF>
                            </button>
                            <button className="btn btn-circle">
                                <FaLinkedinIn className="text-[#0A66C2] text-xl"></FaLinkedinIn>
                            </button>
                            <button onClick={handleGoogleSignUp} className="btn btn-circle">
                                <FcGoogle className="text-xl"></FcGoogle>
                            </button>
                        </div>
                        <p className="text-lg text-[#737373] text-center mt-[50px]">Already have an account? <Link to='/login' className="text-[#FF3811] text-lg font-semibold">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;