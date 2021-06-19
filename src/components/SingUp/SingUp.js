import './SingUp.css'
import { useForm } from "react-hook-form";
import FirebaseLogin from '../FirebaseLogin/FirebaseLogin';

const SingUp = () => {
    document.title ="DhokDo - Registered Your Personal Information";
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="authBox">
                <FirebaseLogin></FirebaseLogin>
                
            </div>
            <br/> <br/>
            <div className="form-container">
                <form className="form-design" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="singUpTitle">Create an account</h1>
                    <input placeholder="Name" name="name" ref={register({ required: true })} />
                    {errors.name && <span className="error">Name is required</span>}

                    <input placeholder="Username or Email" name="email" ref={register({ required: true })} />
                    {errors.email && <span className="error">Email is required</span>}

                    <input placeholder="Password" name="password" ref={register({ required: true })} />
                    {errors.password && <span className="error">Password is required</span>}

                    <input placeholder="Confrim Password" name="password" ref={register({ required: true })} />
                    {errors.password && <span className="error">Confrim Password is required</span>}

                    <input className="form-btn-desing" type="submit" value="Create an account" />
                    <br/>
                    <p>Already have an account? <a href="/singIn">Login</a></p>
                </form>
            </div>
            <br/> <br/> <br/><br/>
        </div>
    );
};

export default SingUp;