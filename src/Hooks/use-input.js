import { useState } from "react"

const useInput = (validationFnc) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouchedValue, setIsTouchedValue] = useState(false);
        
    const valueIsValid = validationFnc(enteredValue);
    const hasInputError = !valueIsValid && isTouchedValue;

    const onInputBlurHandler = () => {
        setIsTouchedValue(true);
    }

    const onInputChangeHandler = (event) => {
        setIsTouchedValue(true);
        setEnteredValue(event.target.value);        
    }
    
    const reset = () => {
        setIsTouchedValue(false);
        setEnteredValue('');
    }

    return {
        value: enteredValue, 
        hasInputError: hasInputError,
        //isTouched: isTouchedValue,
        onInputBlurHandler,
        onInputChangeHandler,
        reset
    }
}

export default useInput;