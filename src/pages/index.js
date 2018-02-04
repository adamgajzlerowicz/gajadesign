import React from 'react';
import Link from 'gatsby-link';
import Header from '../media/header.jpg'; 
import Logo from '../media/gajadesign-logo.png'; 
import Gallery from '../media/galeria.jpg'; 

class IndexPage extends React.Component {

    render(){
        return (
            <div id="page">
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
