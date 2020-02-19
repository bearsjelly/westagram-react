import React, { Component } from 'react';
import Nav from './Nav';
import Feeds from './Feeds';
import Side from './Side';

import './Main.css';

class Main extends Component{
    render(){
        return(
            <div className="body">
                <Nav />
                {/* <!-- main feeds--> */}
                <main>
                    <Feeds />
                    {/* <!-- main right --> */}
                    <Side />
                </main>
            </div>
        );
    }
}

export default Main;