import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Main(){

    let characterList = "";

    const [password, setPassword] = useState("");

    const [passwordLength, setPasswordLength] = useState(10);
    const [addUpperCase, setAddUpperCase] = useState(true);
    const [addLowerCase, setAddLowerCase] = useState(true);
    const [addNumbers, setAddNumbers] = useState(false);
    const [addSymbols, setAddSymbols] = useState(false);

    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*(){}[]?"

    const generatePassword = (e) => {
        e.preventDefault();

        let passwordPlaceholder = "";

        if(passwordLength === ""){
            toast.error('Length is empty', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        if(!addUpperCase && !addLowerCase && !addNumbers && !addSymbols){
            toast.error('At least one condition must be checked', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        if(addUpperCase){
            characterList = characterList + upperCaseLetters;
        }

        if(addLowerCase){
            characterList = characterList + lowerCaseLetters;
        }

        if(addNumbers){
            characterList = characterList + numbers;
        }

        if(addSymbols){
            characterList = characterList + symbols;
        }

        for(let i = 0; i < passwordLength; i++){
            const characterIndex = Math.round(Math.random()*characterList.length);
            passwordPlaceholder = passwordPlaceholder + characterList.charAt(characterIndex);
        }

        setPassword(passwordPlaceholder);
    }

    return (<div id="Main">
        <ToastContainer theme="dark"/>
        <h2>Password Generator</h2>
        <br/>
        <form onSubmit={e => generatePassword(e)}>
            <input type="text" value={password} readOnly/>
            
            <label htmlFor="passwordLength">Password Length</label>
            <input type="number" value={passwordLength} min={5} max={15} onChange={e => setPasswordLength(e.target.value)}/>

            <label htmlFor="upperCase">Include Uppercase</label>
            <Checkbox checked={addUpperCase} onChange={e => e.target.checked ? setAddUpperCase(true): setAddUpperCase(false)}/>


            <label htmlFor="lowerCase">Include Lowercase</label>
            <Checkbox checked={addLowerCase} onChange={e => e.target.checked ? setAddLowerCase(true): setAddLowerCase(false)}/>


            <label htmlFor="numbers">Include Numbers</label>
            <Checkbox checked={addNumbers} onChange={e => e.target.checked ? setAddNumbers(true): setAddNumbers(false)}/>


            <label htmlFor="symbols">Include Symbols</label>
            <Checkbox checked={addSymbols} onChange={e => e.target.checked ? setAddSymbols(true): setAddSymbols(false)}/>


            <input type="submit" value="Generate Password"/>
        </form>
    </div>)
}