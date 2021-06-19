import React from 'react';
import { useForm } from "react-hook-form";
import '../SingUp/SingUp.css'
import FirebaseLogin from '../FirebaseLogin/FirebaseLogin';

const SingIn = () => {
    document.title ="DhokDo - Login Your Account";
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleSingInBtn = (event) =>{
        if(event.target.name ==='email'){
            
        }
        if(event.target.name ==='password'){

        }
        console.log('Click Sing In');
    }

    console.log(watch("example"));
    return (

        <div>
            <div className="authBox">
                <FirebaseLogin></FirebaseLogin>

            </div>
            <br /> <br />
            <div className="form-container">
                <form className="form-design" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="singUpTitle">Login</h1>
                    
                    <input placeholder="Username or Email" name="email" ref={register({ required: true })} />
                    {errors.email && <span className="error">Email is required</span>}

                    <input placeholder="Password" name="password" ref={register({ required: true })} />
                    {errors.password && <span className="error">Password is required</span>}


                    <input onClick={handleSingInBtn} className="form-btn-desing" type="submit" value="Login" />
                    <br />
                    <p>Don't have an account? <a href="/login">Create an account</a></p>
                </form>
            </div>
            <br /> <br /> <br /><br />
        </div>
        // <div className="form-container">
        //     <form  action="">
        //         <div className="form-design">
        //             <h1>Login</h1>
        //             <input placeholder="Username or Email" type="text" /><br />
        //             <input placeholder="Password" type="password" /><br />
        //             <Button className="form-btn-desing" variant="danger"><a href="/login">Login</a></Button>
        //             <br/><br/>
        //             <p>Don't have an account? <a href="/login">Create an account</a></p>
        //         </div>
        //     </form>
        // </div>
    );
};

export default SingIn;