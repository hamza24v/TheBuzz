import {useEffect, useState} from 'react';
import {id} from './Login'
import Home from './Home'
import { useNavigate } from 'react-router-dom';
//import { useParams, useNavigate } from 'react-router-dom';
import { Button,Button1, H1,H2 } from './styles.style';
function Profile(){
    const navigate = useNavigate();
    const [person, setPerson] = useState([]);
  
  
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
        
      
      });
  
    },[] );

    return(
        <div>
            
            <H1>Profile</H1>
            <div>
                <H2>Name: {person.name}</H2>
                <Button1>Edit Name</Button1>
            </div>
            <div>
            <H2>Email: {person.email}</H2>
            <Button1>Edit email</Button1>
            </div>
            
           
            <Button onClick={() => navigate('/components/Home')} >Go Home</Button>
            </div>
     
    
        );

}

export default Profile;