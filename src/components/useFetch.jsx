//Reasoning for this componenet: Since we're fetching data (GET request) in StoryList and in EditStory,
// we can define a fetch function that we can call at any time without having to repeat the code 
import { useState, useEffect } from 'react';
import {getDocs, collection} from 'firebase/firestore';
import {db} from "../firebase";


/**
 * return data from api url
 * @param {string} url 
 * @returns {object} data list of all stories
 */
function useFetch() {

   
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = collection(db, "messages");
    
    console.log("hello");

    const getMessages = async () => {

        try{
            const data = await getDocs(ref);
            console.log(data)
        }
        catch(err){
            console.log(err);
        }
    };

    if(loading){
        return <h1> Loading...</h1>;
    }

    useEffect(() => {
        getMessages();
    }, []);
}

export default useFetch;

