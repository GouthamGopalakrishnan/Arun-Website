import React from 'react';
import Black2 from '../Components/black2.js';
import Blog from '../Components/blog.js';
import Footer from '../Components/footer.js';



function Blogpage (){
    return (
        <div className="ar-filmmakerpage">
            <Black2 name="My Blog"/>
            <Blog />
            <Footer />
        </div>
    );
}
export default Blogpage ;