import firebase from 'firebase/app'
import 'firebase/auth'

export const clickHandler = (elementId, handlerFn) => {
    const clickElement = document.getElementById(elementId);
    if(clickElement) clickElement.onclick = handlerFn
}
