import './firebase/firebaseConfig'
import { clickHandler } from "./util"
import { googleSignIn } from './firebase/firebaseAuthentication'

clickHandler("signin-google", googleSignIn)