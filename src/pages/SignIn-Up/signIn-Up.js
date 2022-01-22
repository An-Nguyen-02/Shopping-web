import react from "react";
import SignIn from '../../components/sign-in/sign-in.js';
import SignUp from '../../components/sign-up/sign-up';

import './signIn-Up.scss';

const SigInAndSignUp = () => (
    <div className="sign-in-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SigInAndSignUp;