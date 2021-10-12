import { useState } from 'react';

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

        if(!passwordLength){
            console.log("hey!");
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
        <h2>Password Generator</h2>
        <br/>
        <form onSubmit={e => generatePassword(e)}>
            <input type="text" value={password} readOnly/>
            <br/><br/>
            
            <label htmlFor="passwordLength">Password Length</label>
            <input type="number" value={passwordLength} min={5} max={20} onChange={e => setPasswordLength(e.target.value)}/>
            <br/><br/>

            <label htmlFor="upperCase">Include Uppercase</label>
            <input type="checkbox" checked={addUpperCase} onChange={e => e.target.checked ? setAddUpperCase(true): setAddUpperCase(false)}/>
            <br/><br/>

            <label htmlFor="lowerCase">Include Lowercase</label>
            <input type="checkbox" checked={addLowerCase} onChange={e => e.target.checked ? setAddLowerCase(true): setAddLowerCase(false)}/>
            <br/><br/>

            <label htmlFor="numbers">Include Numbers</label>
            <input type="checkbox" checked={addNumbers} onChange={e => e.target.checked ? setAddNumbers(true): setAddNumbers(false)}/>
            <br/><br/>

            <label htmlFor="symbols">Include Symbols</label>
            <input type="checkbox" checked={addSymbols} onChange={e => e.target.checked ? setAddSymbols(true): setAddSymbols(false)}/>
            <br/><br/>

            <input type="submit" value="Generate Password"/>
        </form>
    </div>)
}