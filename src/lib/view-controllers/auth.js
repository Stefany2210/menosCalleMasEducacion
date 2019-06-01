import {funcLogin,funcGoogle,funcFacebook} from '../controller-firebase/auth.js'


export const Login=()=>{
funcLogin();
}
export const googleLogin =()=>{
funcGoogle();
}
export const facebookLogin =()=>{
funcFacebook();
}