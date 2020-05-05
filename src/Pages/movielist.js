import React from 'react';
import Filmography from '../Components/filmography';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forensic from './forensic.jpg';
import Paapam from './paapam.jpg';
import ayyappan from './ayyappan.jpeg';
import bigb from './bigb.jpg';
import trance from './trance .jpeg';
import valiyaperunnal from './valiyaperunnal.jpeg';
import gaanagandharvan from './gaanagandharvan.jpg';
import android from './android.jpg';
import './filmographypage.css';
import { Divider } from 'antd';



const Movielist = () => {
    const movielist = [
        {
            Name: 'Trance',
            Img: trance,
            Director : 'Anwar Rasheed',
            Company : 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=uSudz8zb2I8'
        },
        {
            Name : 'Ayyappanum Koshiyum',
            Img: ayyappan,
            Director : 'Sachy',
            Company : 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=8Wx3dAQ8pr4&t=40s'
        },
        {
            Name: 'Forensic',
            Img: Forensic,
            Director : 'Akhil Paul & Anas Khan',
            Company : 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=zTBzGaiAzwY'
        },
        {
            Name: 'Android Kunjappan',
            Img: android,
            Director: 'Ratheesh Balakrishnan',
            Company: 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=ZO5MN0Ws0Hc'
        },
        {
            Name : 'Paapam Cheyyathavar Kalleriyatte',
            Img : Paapam,
            Director : 'Shambu Purushothaman',
            Company : 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=4BxSLZnnH7w'
        },

        {
            Name: 'Big Brother',
            Img: bigb,
            Director: 'Siddique',
            Company: 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=GAY3jdx1PoA'
        },

        {
            Name: 'Valiyaperunnal',
            Img: valiyaperunnal,
            Director : 'Dimal Dennis ',
            Company : 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=gAN2X3dWlmI'
        },
        {
            Name: 'Gaanagandharvan',
            Img: gaanagandharvan,
            Director: 'Ramesh Pisharadi',
            Company: 'Digital Turbo Media',
            trailer : 'https://www.youtube.com/watch?v=jxHdR8vzgIo'
        }


    ];
    return (
        <div className="ar-nav-sr-r1 mb-3">
            <div className="ar-movie-1">
                <Divider className="w-100" />
                <div className=" row w-100">
                    {movielist.map(movie => (

                        
                            <div className=" ar-dis-mov col-lg-3 my-3 col-sm-6 col-md-6"> <Filmography name= {movie.Name} director= {movie.Director} company= {movie.Company} img={movie.Img} trailer={movie.trailer} />
                            </div>
                        

                    ))}
                </div>
            </div>

        </div>
    );
}
export default Movielist;

