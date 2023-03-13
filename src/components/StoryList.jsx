import React from 'react';
import { useNavigate } from 'react-router-dom';

 
 
/**
 * return list of stories
 * @param {Object} stories 
 * @rreturns render
 */
function StoryList({stories}) {
 const navigate = useNavigate();
  const storyStyle = {
   border: '3px solid black',
   fontFamily: 'Arial',
   padding: '40px',
   margin: 'center', 
 };
 
 
 /**
  * handles delete request
  * @param {int} id 
  * 
  */
 function handleDelete(id) {
   console.log(id);
   fetch('https://salty-bayou-12384.herokuapp.com/messages/' + id, {
     method: 'DELETE'
   }).then(() => {
     window.location.reload(false); //refreshes page
   })
 }
 
 
 //display stories
 return (
   <>
     {Object.values(stories).map(story => (
       <div>
         <center key={story.mId}>
           <h2> Story {story.mId} </h2>
           <p style={storyStyle}> {story.mMessage} </p>
           <button onClick={() => handleDelete(story.mId)}> Delete</button>
           <button onClick={() => navigate('/components/EditStory/' + story.mId)}> Edit</button>
           
         </center>
       </div>
     ))}
 
   </>
 )
}
 
export default StoryList

