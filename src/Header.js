import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div>
                <header className="masthead header-pic">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>Not Ya Mama's Ipsum</h1>
                                    <span className="subheading">An Ipsum for Every Occassion</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;