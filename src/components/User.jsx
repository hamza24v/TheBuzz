import {id} from './Login'

import {useEffect, useState} from 'react';
import Home from './Home'
import Profile from './Profile'

//this function will send the id through a put route
//if the id is already in the database then send them to home page
//if the id is not them send to profile pahe


//post id route - send the id
//  curl -s https://salty-bayou-12384.herokuapp.com/id -X POST -d "{'mMessage': "{id}"" }
export var dat=100;
function User(){
  const [person, setPerson] = useState([]);
  const [returnUser, setReturnUser] = useState(false);

  useEffect(() => {

    fetch('https://salty-bayou-12384.herokuapp.com/id', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            mMessage: id
        })
    }).then((res) => res.json()).then((data) => {

        console.log('Story added');
        console.log(data.mData);
        console.log(data.mStatus);
        setPerson(data.mData);
        if(data.mStatus === "Returning Send to home screen"){
            setReturnUser(true);//if true send to homescreen
        }
        dat =person;
      
    
    });

  },[] );

// <h1> {returnUser? <Home/>:<Profile/>}</h1>
  return(
    <div >
        
        <h1> {returnUser? <Profile/>:<Profile/>}</h1>
        
        </div>


    );
}

export default User;