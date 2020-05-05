
    import React from "react";
    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link,
      Redirect
    } from "react-router-dom";
    import Filmography from './Components/filmography';
    import Showreel from './Components/showreel';
    import Filmmaker from './Components/filmmaker';
    import Black2 from './Components/black2';
    import Footer from './Components/footer';
    import Navs from './Components/navs';
    import Homepage from './Pages/homepage';
    import Filmmakerpage from './Pages/filmmakerpage';
    import Filmographypage from './Pages/filmographypage';
import Blogpage from "./Pages/blogpage";
import Blogcontent from "./Components/blogcontent";
    
   function App() {
      return (
        <Router>
          <div>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
    

              <Route path="/:menu(filmography)">
                <Navs />
                <Filmographypage />
              </Route>
              <Route  exact path="/:menu(blog)">
              <Navs />
                <Blogpage/>
              </Route>
              <Route path="/:menu(filmmaker)">
              <Navs />

                  <Filmmakerpage />
              </Route>
              <Route path="/:menu(showreel)">
              <Navs />

              <Homepage />
              </Route>
              <Route path="/blog/moveFast">
                <Navs />
                <Black2 name="My Blog" />
                <Blogcontent />
                <Footer />
              </Route>
              
              <Redirect from="/" to="/showreel" />
            </Switch>
          </div>
        </Router>
      );
    }
   


export default App;
