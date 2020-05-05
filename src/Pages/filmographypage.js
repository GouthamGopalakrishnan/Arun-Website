import React from 'react';
import Black2 from '../Components/black2.js';
// import Filmography from '../Components/filmography.js';
import Footer from '../Components/footer.js';
import './filmographypage.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Movielist from './movielist.js';

function Filmographypage(){
    return (
        <div className="ar-homepage">
            <Black2 name="My Commercial Work"/>
            <Movielist />
            <Footer />
        </div>
    );
}
export default Filmographypage ;