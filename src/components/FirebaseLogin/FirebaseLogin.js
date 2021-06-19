import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './FirebaseLogin.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const FirebaseLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handelGithubSingIn = () => {
        var provider = new firebase.auth.GithubAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const {displayName, email} = result.user;
                const singInUser = { name: displayName, email: email}
                setLoggedInUser(singInUser);
                history.replace(from);

                console.log(loggedInUser);
                console.log(token);
                
                // var user = result.user;
                // console.log(user);
            })
            // .catch((error) => {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     var email = error.email;
            //     var credential = error.credential;
            // });
    }


    const handelGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const {displayName, email} = result.user;
                const singInUser = { name: displayName, email: email}
                setLoggedInUser(singInUser);
                history.replace(from);
                
                console.log(token);
            })
            // .catch((error) => {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     var email = error.email;
            //     var credential = error.credential;
            // });
        console.log('Google Sing In');
    }
    return (
        <div>

            <h4 className="lockTitle"><FontAwesomeIcon icon={faLock} /> Sing In</h4> <br />
            <Button variant="secondary" className="singInBtnDesign" onClick={handelGoogleSingIn} ><FontAwesomeIcon icon={faGoogle} /> Sing In With Google</Button>
            <br />
            <br />
            <Button variant="success" className="singInBtnDesign" onClick={handelGithubSingIn} ><FontAwesomeIcon icon={faGithub} /> Sing In With GitHub</Button>
            <br /> <br/>
            <h4>Or</h4>
        </div>
    );
};

export default FirebaseLogin;