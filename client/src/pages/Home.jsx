import ExperienceSlider from "../Components/Home/ExperienceSlider";
import FeaturedVideos from "../Components/Home/FeaturedVideos";
import Footer from "../Components/Home/Footer";

import YogaHighlights from "../Components/Home/YogaHighlights";
import YogaInstitute from "../Components/Home/YogaInstitute";
import YogaSlider from "../Components/Home/YogaSlider";
import { Navigationbar } from "../Components/NavigationBar";

const Home = () => {
    return(
        <div>
            <Navigationbar/>
            <YogaSlider/>

            <div className="mt-5">
                <YogaInstitute/>
            </div>
            
            <div className="mt-5">
                <YogaHighlights/>
            </div>
            
            <div className="mt-5">
                <ExperienceSlider />
            </div>
            

            <div className="mt-5">
                <FeaturedVideos />
            </div>

            <div className="mt-5">
                <Footer/>
            </div>
            

        </div>
    
    )
};

export default Home;