import { Button, H1 } from './styles.style';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Home from './Home'
import User from './User'

export var id;;
function Login() {
    const [ user, setUser,] = useState({});

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: "+ response.credential);
        var userObject = jwt_decode(response.credential);
        id = response.credential;
    //   id(response.credential);
        //setid(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
       
     
    }

    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect (()=>{
        /* global google */
        google.accounts.id.initialize({
          client_id: "237876622401-2hu86g5iubrd2v04sb8tj1usg1uhm9i4.apps.googleusercontent.com",
          callback: handleCallbackResponse
        });
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme: "outline", size: "large"}
        )
          
    
         
      },[]);

  
   return (
    
    <div className="Login" >
    <div id  ="signInDiv"> hello</div>
    
   
    {user && Object.keys(user).length !=0 &&  <button onClick= { (e) => handleSignOut(e)}>Sign Out</button> 
    &&
      // <div>
      //   Send this to backend with post route:
      //  <h3>{id}</h3>
      // </div>
      // <div>
      //      <h3>{userObject}</h3>
      // </div>
      <User/>
   //  <Home/>
    }
  
  </div>        
 
     
    
 
   );
 
 
}
 
 
export default Login;

