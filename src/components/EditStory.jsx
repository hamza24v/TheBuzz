import React from 'react';
import { H1, Input, CancelButton, Button } from './styles.style';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
 
/**
 * Edit Story
 * @returns edit story page 
 */
function EditStory() {

    /**
     * @constant {int} id gets the mId param from url
     */
    const { id } = useParams();

    /**
     * @constant {hook} navigate navigates to different componenets (pages)
     */
    const navigate = useNavigate();

    /**
     * @constant {string} currentStory variable containing the story 
     */
    const [currentStory, setStory] = useState(null);

    /**
     * @hook fetches story (GEt request)
     * @params function
     * @params dependency (when it should be run)
     */
    useEffect(() => {
        fetch('https://salty-bayou-12384.herokuapp.com/messages/' + id)
            .then(response =>
                response.json()
            )
            .then(data => { // story received in json format
                setStory(data['mData']['mMessage']);

            })
    }, []) 


    /**
     * handles edit (PUt request)
     * @param {any} e 
     */
    function handleEdit(e) {
        e.preventDefault();
        fetch('https://salty-bayou-12384.herokuapp.com/messages/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mMessage: currentStory
            })
        }).then(response => response.json())
            .then(data => {
                console.log('story updated: ', data);
                navigate('/');
                //setLikeCounter(data['mData']['mNumLikes'])
            });

    }

    return (
        <>
            <H1> Edit Story {id} </H1>
            <form onSubmit={handleEdit}>
                <Input type='text'
                    value={currentStory}
                    onChange={(e) => setStory(e.target.value)} /> {/* places currentStroy in text box to be edited*/}
                <Button type='submit' value='Submit' > Update </Button>
                <CancelButton type='reset' value='Reset' onClick={() => navigate(-1)}> Cancel </CancelButton>
            </form>
        </>
    )
}
export default EditStory

// Takeaways: For editing, it's better to manually fetch the stories in this function than rely on an outside component file (useFetch), otherwise you'll get error messages

