import React from 'react';
import Black2 from '../Components/black2.js';
import Filmmaker from '../Components/filmmaker.js';
import Footer from '../Components/footer.js';


function Filmmakerpage (){
    return (
        <div className="ar-filmmakerpage">
            <Black2 name="My Work"/>
            <Filmmaker />
            <Footer />
        </div>
    );
}
export default Filmmakerpage ;