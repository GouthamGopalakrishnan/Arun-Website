import React from 'react';
import './blogcontent.css';
import img from './GetImage.png';
import gif from './moveFast.gif';
import { Divider } from 'antd';


function Blogcontent() {
    return (
        <div className="blog-main">
            <h1 className="blog-heading">moveFast </h1>
            {/* <h6 className="blog-name">Arun P Lukose</h6> */}
            <p className="blog-date">Apr 06,2020 </p>
            <p className="blog-content">Helps to move nodes through the nodegraph without dragging, while retaining the connections. moveFast helps to move your nodes through the nodegraph very  quickly instead of dragging all the way.

            One other solution is to just  cut and paste the nodes.

            But it won't retain the existing connections.
            This could come in handy while dealing with large scripts.
            Special thanks to <a title="Erwan Leroy"href="http://erwanleroy.com/" target="_blank">Erwan Leroy </a>for helping me out.
            </p>
            <img className="blog-gif" width="550" height="350" src={gif} alt="invalid" />
            <p className="blog-content2"><span style={{ color: "black" }}>Installation:</span>  <br />
place the moveFast.py file into your .nuke/python directory <br />

add this to the menu.py file: <br />

# moveFast <br />

nodeMenu = nuke.menu('Nuke').addMenu('moveFast') <br />

nodeMenu.addCommand('moveFast', 'moveFast.move_fast()', 'shift+f', shortcutContext=2) <br />



Change the 'shift+f' in the above line to your desired shortcut if needed. </p>
            <img src={img} alt="invalid"></img>

            <div className="mt-2 sharewith">
                
            
            <div  data-href="http://localhost:3000/blog/moveFast" data-layout="button" data-size="small"><b>share with: </b><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
                <i class="fab fa-facebook-square ar-blog-fb pl-2"></i></a>

            
            <a target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false"><i class="fab fa-twitter ar-blog-twitter pl-2"></i> </a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            </div>
            </div>
            <div className="ar-blog-divider w-35">
                <Divider className="ar-divider" />
            </div>
        
        </div>
    );
}
export default Blogcontent;