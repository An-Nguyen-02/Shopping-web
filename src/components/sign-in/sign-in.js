import react from "react";
import './sign-in.scss';
import FormInput from '../form-input/form-input.js';
import CustomButton from '../custom-button/custom-button.js'
import { signInWithGoogle } from '../../firebase/firebase.util.js'

class SignIn extends react.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''});
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        const { email, password } = this.state;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={email} 
                        handleChange={this.handleChange} 
                        label="email"
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={password} 
                        handleChange={this.handleChange} 
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;