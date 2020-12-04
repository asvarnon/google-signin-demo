import './firebase/firebaseConfig'
import { clickHandler } from "./util"
import { googleSignIn, googleSignOut } from './firebase/firebaseAuthentication'

clickHandler("signin-google", googleSignIn)
clickHandler(("app-signout", googleSignOut()))