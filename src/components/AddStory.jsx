import React from 'react';
import { Input, CancelButton, Button, H1 } from './styles.style';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
 

/**
 * renders add story page
 * @returns Add story page
 */
function AddStory(){
    /**
     * @constant {string} currentStory variable containing the story 
     */
    const [story, setStory] = useState('');

    /**
     * @constant {hook} navigate navigates to different componenets (pages)
     */
    const navigate = useNavigate();

   /**
    * handles submission (POST request)
    * @param {any} e 
    */
   function handleSubmit(e) {
       e.preventDefault();
 
       //preventing empty entries from being sent to database
       if(story === '')
           alert('Story not entered; please enter story')
       else{
           fetch('https://salty-bayou-12384.herokuapp.com/messages', {
               method: 'POST',
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify({
                   mMessage: story
               })
           }).then(() => {
               console.log('Story added');
               navigate('/components/Home');
           })
       }
       setStory(''); //Preparing for new story entry
   }
 
 
 
   return(
       <>
           <H1> Add a new story</H1>
           <form onSubmit={handleSubmit}>
 
               {/*story input */}
               <Input type='text'
               placeholder='Enter story'
               value = {story}
               onChange={(e) => setStory(e.target.value)}>
               </Input>
 
               <Button type='submit' value='Submit'>Post</Button>
               <CancelButton type='reset' value='Reset' onClick={()=>navigate(-1)}>Cancel</CancelButton>
 
          
           </form>
       </>
   )
}
 
export default AddStory

