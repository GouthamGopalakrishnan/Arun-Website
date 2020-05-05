import React from 'react';
import './blog.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blog from './moveFast.png';
import Button from 'react-bootstrap/Button';
import { Divider } from 'antd';
import Blogcontent from './blogcontent';
import { Link } from 'react-router-dom';
import gif from './blog.gif';




function Blog() {
    return (
        <div className="ar-blog " style={{ minHeight: window.innerHeight - 310 }}>
            <div class="row justify-content-md-center">
                <div class="col col-md-5 col-sm-4 col-lg-4">
                    <img className="w-100"width="400" height="200" src={gif} alt="invalid" />
                </div>
                <div class="col col-md-6 col-sm-6 col-lg-5">
                    <h1 className="ar-blog-h1">Python Script : moveFast</h1>
                    <h4 className="ar-blog-h2">moveFast helps to move your nodes through the nodegraph very  quickly instead of dragging all the way. <br />

                                                Could come in handy while dealing with large scripts. </h4>
                    <div className="ar-button pt-3">
                        <Link to="/blog/moveFast">
                            <Button variant="success" >Read more...</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="ar-blog-divider">
                <Divider className="ar-divider" />
            </div>

        </div>
    );
}
export default Blog;
