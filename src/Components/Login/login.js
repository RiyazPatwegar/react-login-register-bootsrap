import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import classes from './login.module.css';
import { useState } from 'react';

const Login = () => {
    
    const history = useHistory();      
    const dispatch = useDispatch();

    const [enteredName, setEnteredName] = useState('');
    const [isNameTouched, setIsNameTouched] = useState(false);
    
    const [enteredPassword, setEnteredPassword] = useState('');
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    let enteredNameIsValid = enteredName.trim() !== '';
    let nameInputIsInvalid = isNameTouched && ( !enteredNameIsValid  || (enteredName.trim().includes('@') === false || enteredName.trim().includes('.') === false));     
    
    let passwordInputIsInvalid = isPasswordTouched && (enteredPassword.trim() === '' || enteredPassword.trim().length < 4);     

    let isFormValid = false;
    //console.log(!nameInputIsInvalid);
    //console.log(!passwordInputIsInvalid);
    if (!nameInputIsInvalid && !passwordInputIsInvalid) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }
    //console.log("form "+isFormValid);

    const onNameFocusOut = (event) => {
        setEnteredName(event.target.value);
        setIsNameTouched(true);                
    }    

    const onEnterNameChangeHandler = (event) => {
        setEnteredName(event.target.value);        
    }

    const onPasswordFocusOut = (event) => {
        setEnteredPassword(event.target.value);
        setIsPasswordTouched(true);                
    }    

    const onEnterPasswordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);        
    }

    const submitHandler = event => {
        event.preventDefault();

        if (nameInputIsInvalid || passwordInputIsInvalid) { 
            return;
        }
        
        
        setEnteredName('');
        setEnteredPassword('');
        setIsNameTouched(false);
        setIsPasswordTouched(false);        
        
        const userData = {
            name : 'Riyaz',
            sername : 'Patwegar'
        }

        dispatch({type:'login', value: userData});
        localStorage.setItem('isLoggedIn', true);
        console.log('******************************');
        history.replace("/");
        console.log('Form submitted successfully!');
    }

    const invalidNameClass =  nameInputIsInvalid ? `form-control ${classes.invalid}` : 'form-control';

    const invalidPasswordClass =  passwordInputIsInvalid ? `form-control ${classes.invalid}` : 'form-control';

    return (
        <form className={classes['form-signin']} onSubmit={submitHandler}>
            <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>

            <label className="sr-only">Email address</label>
            <input 
            onBlur={onNameFocusOut} 
            onChange={onEnterNameChangeHandler}
            type="text"             
            className={invalidNameClass} 
            placeholder="Email address"
            value={enteredName}
            required 
            max="25" />
            {nameInputIsInvalid && <p className={classes.error_message}>Email field must be valid!</p> }

            &nbsp;
            
            <label className="sr-only">Password</label>
            <input 
            onChange={onEnterPasswordChangeHandler}
            onBlur={onPasswordFocusOut}
            value={enteredPassword}
            type="password" 
            className={invalidPasswordClass} 
            placeholder="Password" 
            required />
            {passwordInputIsInvalid && <p className={classes.error_message}>Password field should have at least 4 digit!</p> }

            <button disabled={!isFormValid} className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
            <br />
            Don't have you account ? <Link to="/signup">Sign Up</Link> here!
        </form>
    );
}

export default Login;