import React from 'react';
import Black from '../Components/black.js';
import Showreel from '../Components/showreel.js';
import Footer from '../Components/footer.js';


function Homepage (){
    return (
        <div className="ar-homepage"  >
            <Black/>
            <Showreel style={{height:'100 vh'}} />
            <Footer />
           
        </div>
    );
}
export default Homepage ;