import auth from './firebase.config';
import './App.css';
import { useState} from 'react';
function App() {
    const [email, setemail] = useState('');
    


    const signup = () => {
        auth.createUserWithEmailAndPassword(email).then((userCredential) => {
                // send verification mail.
                userCredential.user.sendEmailVerification();
                // auth.signOut();
                alert("Email sent");
            }).catch(alert);
    }
 
 
    return (
        <div className="App">
            <br /><br />
            <input type="email" placeholder="Email" className="email"
                onChange={(e) => { setemail(e.target.value) }}>
            </input>
            <br /><br />
           
            <br /><br />
            <button onClick={signup} className='btn'>Sign-up</button>
        </div>
    );
}
 
export default App;
