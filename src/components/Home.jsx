import { Button, H1 } from './styles.style';
import { useNavigate } from 'react-router-dom';
import StoryList from './StoryList';
import useFetch from './useFetch';


/**
 * renders home page 
 * @returns rendered home
 */
function Home() {

    /**
     * @constant {hook} navigate navigates to different componenets (pages)
     */
    const navigate = useNavigate();

    /**
     * @constant {object} data object containing stories
     */
    const { data: stories } = useFetch(); //stories contains the json data ()

    return (

        <div>
            <H1> All Stories </H1>
            {stories && <StoryList stories={stories.mData} />}
            <Button onClick={() => navigate('/components/AddStory')} >Add a story</Button>
            <button onClick={() => navigate('/') }> Log out </button>
            <button style={{color:'red'}} onClick={() => navigate('/components/Profile') }> Profile </button>
     
            
        </div>

    );


}


export default Home;

