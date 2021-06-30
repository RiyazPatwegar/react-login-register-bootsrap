import { useState } from  'react';
import useInput from '../../Hooks/use-input';
import classes from './register.module.css';

const Register = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        value: enteredFirstName,
        hasInputError: hasInputFirstNameError,
        //isTouched: isFirstNameTouched,
        onInputBlurHandler: firstNameBlurHandler,
        onInputChangeHandler: firstNameChangeHandler,
        reset: resetFirstNameHandler
    } = useInput((value) => (value.trim() !== '' && value.trim().length > 2));

    const {
        value: enteredLastName,
        hasInputError: hasInputLastNameError,
        //isTouched: isLastNameTouched,
        onInputBlurHandler: lastNameBlurHandler,
        onInputChangeHandler: lastNameChangeHandler,
        reset: resetLastNameHandler
    } = useInput((value) => (value.trim() !== '' && value.trim().length > 2));

    const {
        value: enteredUsername,
        hasInputError: hasInputUsernameError,
        onInputBlurHandler: usernameBlurHandler,
        onInputChangeHandler: usernameChangeHandler,
        reset: resetUsernameHandler
    } = useInput((value) => (value.trim() !== '' && value.trim().length > 2));

    const {
        value: enteredEmail,
        hasInputError: hasInputEmailError,
        onInputBlurHandler: emailBlurHandler,
        onInputChangeHandler: emailChangeHandler,
        reset: resetEmailHandler
    } = useInput((value) => (value.trim() !== '' && value.trim().includes('@') && value.trim().includes('.')));

    const {
        value: enteredAddress,
        hasInputError: hasInputAddressError,
        onInputBlurHandler: addressBlurHandler,
        onInputChangeHandler: addressChangeHandler,
        reset: resetAddressHandler
    } = useInput((value) => (value.trim() !== '' && value.trim().length > 5));

    let isFormValid = false;

    if (!hasInputFirstNameError && !hasInputLastNameError && !hasInputUsernameError) {
        isFormValid = true;
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (hasInputFirstNameError || hasInputLastNameError || hasInputUsernameError) {
            isFormValid = false;
            return;
        }

        try {
            const response = await fetch('https://admin-app-aa8a4-default-rtdb.firebaseio.com/users.json', {
                method: 'POST',
                body: JSON.stringify({
                    firstName: enteredFirstName,
                    lastName: enteredLastName,
                    userName: enteredUsername,
                    email: enteredEmail,
                    address: enteredAddress
                })
            });

            if (!response.ok) {
                throw new Error();
            }

            setIsSubmitted(true);
            resetFirstNameHandler();
            resetLastNameHandler();
            resetUsernameHandler();
            resetEmailHandler();
            resetAddressHandler();
            console.log('Form submitted!');

        } catch (error) {
            console.log(error.message);
        }
    }

    const firstNameErrorClass = hasInputFirstNameError ? `form-control ${classes.invalid}` : 'form-control';
    const lastNameErrorClass = hasInputLastNameError ? `form-control ${classes.invalid}` : 'form-control';
    const usernameErrorClass = hasInputUsernameError ? `form-control ${classes.invalid}` : 'form-control';
    const emailErrorClass = hasInputEmailError ? `form-control ${classes.invalid}` : 'form-control';
    const addressErrorClass = hasInputAddressError ? `form-control ${classes.invalid}` : 'form-control';

    const registrationForm = (
        <form className="needs-validation" onSubmit={submitHandler}>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className={firstNameErrorClass}
                        placeholder=""
                        value={enteredFirstName}
                        onBlur={firstNameBlurHandler}
                        onChange={firstNameChangeHandler}
                        required />

                    {hasInputFirstNameError && <div className={classes.error_message}>
                        Valid first name is required.
                </div>}
                </div>

                <div className="col-md-6 mb-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className={lastNameErrorClass}
                        placeholder=""
                        value={enteredLastName}
                        onBlur={lastNameBlurHandler}
                        onChange={lastNameChangeHandler}
                        required />

                    {hasInputLastNameError && <div className={classes.error_message}>
                        Valid last name is required.
                </div>}
                </div>
            </div>

            <div className="mb-3">
                <label>Username</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                    </div>
                    <input
                        type="text"
                        className={usernameErrorClass}
                        placeholder="Username"
                        value={enteredUsername}
                        onBlur={usernameBlurHandler}
                        onChange={usernameChangeHandler}
                        required />

                    {hasInputUsernameError && <div className={classes.error_message}>
                        &nbsp; Your username is required.
                </div>}
                </div>
            </div>

            <div className="mb-3">
                <label >Email</label>
                <input type="email"
                    className={emailErrorClass}
                    placeholder="you@example.com"
                    value={enteredEmail}
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                />

                {hasInputEmailError && <div><div className={classes.error_message}>
                    Please enter a valid email address for shipping updates.
            </div><br /></div>}
            </div>

            <div className="mb-3">
                <label>Address</label>
                <input
                    type="text"
                    className={addressErrorClass}
                    placeholder="1234 Main St"
                    value={enteredAddress}
                    onBlur={addressBlurHandler}
                    onChange={addressChangeHandler}
                />

                {hasInputAddressError && <div className={classes.error_message}>
                    Please enter your shipping address.
            </div>}
            </div>
            <div className="text-center">
                <br />
                <button disabled={!isFormValid ? true : false} className="btn btn-primary" type="submit">Sign Up</button>
            </div>
        </form>
    );
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-9 form p-4 ${classes['register-form']}`}>
                    <h4 className="mb-3">Sign Up</h4>
                    {!isSubmitted && registrationForm}
                    {isSubmitted && <div className="text-center">You have registered successfully! <br/> You can now <a href="#">Login</a> to access your account</div>}
                </div>
            </div>
        </div>
    );
}

export default Register;