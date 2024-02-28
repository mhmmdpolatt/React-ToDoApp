
import React from "react";
import { AiFillBook } from "react-icons/ai";
function Header() {
    return ( 
        <>
            <header style={{backgroundColor:"#black" , color:"white", textAlign:"center", padding:"5px"} }>
                <h1><AiFillBook /> ToDo Uygulaması</h1>
            </header>
        </>
     );
}

export default Header;