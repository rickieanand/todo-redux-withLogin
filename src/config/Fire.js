import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyADjMpuiTXj85Qkwl7m2G7EvNehCqxgSX4",
    authDomain: "todo-ac2d8.firebaseapp.com",
    databaseURL: "https://todo-ac2d8.firebaseio.com",
    projectId: "todo-ac2d8",
    storageBucket: "todo-ac2d8.appspot.com",
    messagingSenderId: "854640657476"
}
const fire = firebase.initializeApp(config)
export default fire

export const database = firebase.database();
export const getTodo = () => {
    return database.ref('/list').once('value')
}