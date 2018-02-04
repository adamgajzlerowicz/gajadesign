import React from 'react';
import Link from 'gatsby-link';
import Header from '../media/header.jpg'; 
import Logo from '../media/gajadesign-logo.png'; 
import Gallery from '../media/galeria.jpg'; 
import Fade from 'react-fade'; 

class IndexPage extends React.Component {

    state={
        showLogo: false
    };

    componentDidMount(){
        const that = this;
        window.addEventListener('scroll', function(e) {
            that.setState({showLogo: window.scrollY > window.innerHeight - 200 ? true : false});
        });
    }

    render(){
        console.log(this.state.showLogo);
        return (
            <div id="page">
                <Fade
                    className="faded-logo"
                    out={!this.state.showLogo}
                    style={{ opacity: this.state.showLogo ? 1 : 0}}
                >
                    <img src={Logo} />
                </Fade>
                <div id="header" style={{backgroundImage: `url("${Header}")`}}>
                    <img src={Logo} alt="Gaja design logo" />
                    <div id="header-content">
                        <p>Wiz<strong>ja</strong></p>
                        <p><strong>Pro</strong>jekt</p>
                        <p><strong>Real</strong>izacja</p>
                    </div>
                </div>
                <div id="gallery">
                    <img src={Gallery} alt="galeria"/>
                </div>
                <div id="contact">
                    <div className="heading">
                        <p>Chcesz porozmawiać o nowym projekcie?</p> 
                        <p>Skontaktuj się ze mna!</p>
                    </div>
                    <div className="contact-methods">
                        <div className="phone"><span>Telefon:</span> 07893745897</div>
                        <div className="email"><span>Email:</span> a@gajadesign.pl</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexPage
