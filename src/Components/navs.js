import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


import Footer from './footer';
import './navs.css';
import Navigation from './navigation';

const { Header, Content } = Layout;

function Navs() {
    let { menu } = useParams();
    console.log("menu", menu);
    return (
        <div className="ar-navs-mainlayout ">
        

                <Layout className="layout md">

                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="ar-navs-layout">
                            <div className="logo float-left " ><Link to="/">ARUN P LUKOSE</Link>
                            </div>

                            <Menu className="float-right" theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[menu]} >
                                <Menu.Item key="showreel"><Link to="/">SHOWREEL</Link></Menu.Item>
                                <Menu.Item key="filmography"><Link to="/filmography">FILMOGRAPHY</Link></Menu.Item>
                                <Menu.Item key="blog"><Link to="/blog">BLOG</Link></Menu.Item>
                                <Menu.Item key="filmmaker"><Link to="/filmmaker">FILM MAKER</Link></Menu.Item>

                            </Menu>
                        </div>
                        
                    </Header>
                    
                    <Footer />
                </Layout>
                {/* <Navigation/> */}
                
        </div>
    );
}
export default Navs;




