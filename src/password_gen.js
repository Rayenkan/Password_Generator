import React, { useState } from "react";
import './index.css';

const GenPass =() => {
    const [password , setpassword ]=useState("");
    const [upperCase , setupperCase]=useState(false);
    const [Numbers , setnumber]=useState(false);
    const [Symbols , setsymbols]=useState(false);
    const [length , setlength]=useState(10);

    const generatePassword = () => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
        let validChars = lowercaseChars;
        if (upperCase) validChars += uppercaseChars;
        if (Numbers) validChars += numberChars;
        if (Symbols) validChars += specialChars;
    
        var p = '';
    
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * validChars.length);
          p += validChars.charAt(randomIndex);
          
        }
        setpassword(p);
    }
    return (
            <div class="h-24 text-white font-semibold text-xl  py-2 ">
                <div >
                    <input type="text" placeholder="Password" class="text-mediumbold px-4 text-blue-400 text-center bg-blue-900 w-full h-12 rounded-md "  value={password} disabled></input>
                </div>
                
                <div class=" border-b border-transparent h-70 px-4 py-6 rounded bg-blue-900 my-2">
                    <div>
                        length : <span class=" text-blue-400 text-right ">{length} </span>
                        <input type="range" class="w-full h-2 rounded-lg cursor-pointer appearance-none bg-green-200" min={8} max={25}  onChange={(e) => setlength(e.target.value)}></input><br/>
                    </div>
                    <div>
                        <table>
                            <tr>
                            <td><input type="checkbox" class="mr-4  border-green-200 " onChange={() => setnumber(!Numbers)}></input></td>
                                <td>Allow Number </td>                                
                            </tr>
                            <tr>                                
                                <td><input type="checkbox" onChange={() => setupperCase(!upperCase)}></input><br/></td>
                                <td>Allow upperCase    </td>
                            </tr>
                            <tr>                                
                                <td><input type="checkbox" onChange={() => setsymbols(!Symbols)}></input></td>
                                <td>Allow symbols </td>
                            </tr>
                        </table>
                          
                        
                          
                    </div>
                    <div class="flex justify-center mt-3  ">
                        <button onClick={generatePassword} class=" my-2  border w-full h-12 ring-4 shadow-green-100 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] " >Generate</button>
                    </div>
                </div>
                
            </div>
    )
}
export default GenPass ;