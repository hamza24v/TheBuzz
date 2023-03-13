import React, {useState, useEffect}from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddStory from './components/AddStory';
import Home from './components/Home';
import EditStory from './components/EditStory';
import StoryList from './components/StoryList';
import Login from './components/Login'
import Profile from './components/Profile'
import {db} from "./firebase";
import {getDocs, collection} from "firebase/firestore";

//test for no merge conflict
 
 
/**
 * @description root component (where app start) connects all the components together
 * contains all the routes needed to navigate in the app
 * 
 */
function App() {

    
   return (
       <Router>
           <Routes>
               <Route exact path = '/' element={<Home/>}> </Route>
               <Route exact path ='/components/Home' element={<Home />}></Route>
               <Route exact path ='/components/Profile' element={<Profile />}></Route>
               <Route exact path ='/components/AddStory' element={<AddStory />}></Route>
               <Route exact path ='/components/EditStory/:id' element={<EditStory />}></Route>
               <Route exact path = '/components/StoryList' element = {<StoryList/>}></Route>

           </Routes>
       </Router>    
   );
  
  
}
 
 
export default App;

