import React,{useState} from "react";
import {Welcome} from './Welcome'
const Login = () => { 
    // Hide and Unhide Function
    const [isVisible, setVisible] = useState(true)
    let HideAndShow = () =>{
        setVisible(!isVisible)
    }

    //null input
    let name="";
    const [name_output, setstate] = useState("")

    // Taking Inputs
    const chng=(event)=>{ 
        event.preventDefault();
        name=event.target.value;
        
    };

    // Button function and Check if empty
    const triggerButton=()=>{
        if(name.trim().length === 0 ){
            alert("Please Enter Your Name");
        }
        else{
            setstate(name);
            HideAndShow();
        }
      
    }

    const social = () =>{
        window.open('https://www.linkedin.com/in/03prashantpk/', '_blank');
        setTimeout(() => {
            window.open('https://github.com/03prashantpk/', '_blank');
        }, 2000);
        
    }

    // Random avtar
    const AvtarUrl = 
    [
        "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
        "https://i.pinimg.com/236x/49/8d/bf/498dbf7df0fa9a7bf70c8dd23343908e.jpg",
        "https://i.pinimg.com/474x/8c/e6/8b/8ce68b3cb092d190a2bd1f78837d6816.jpg",
        "https://i.pinimg.com/474x/8c/e6/8b/8ce68b3cb092d190a2bd1f78837d6816.jpg",
        "https://i.pinimg.com/236x/1d/79/7c/1d797ced464c1a4f2f8edb878666ca72.jpg"
    ]
    var randomAvtar = Math.floor(Math.random() * AvtarUrl.length);    


    // Main Return Function
    return ( 
        <>
        <div className="welcome-content" style={{display: (isVisible) ? 'block' : 'none'}}>
            <img src={AvtarUrl[randomAvtar]} alt="name"/>
            <div>
                <input type="text" placeholder="Enter Your Name"  onChange={chng}/>
                <br/>
                <button onClick={triggerButton}>Login</button>
            </div>
        </div>
        
        {/* Rendering Welcome Page with Props */}
        <div style={{display: (!isVisible) ? 'block' : 'none'}}>
                <Welcome title={name_output}/>
        </div>
            <p id="credit">Assignment Reg: 12014798<br/>Made with <span>love</span> by Prashant Kumar - <span onMouseOver={social}>LinkedIn | GitHub</span> </p>
        </>
      
    ); 
    
} 

export {Login};
// Written by github: @03prashantpk