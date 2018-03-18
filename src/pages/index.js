import React from 'react';
import Header from '../media/header.jpg';
import Logo from '../media/gajadesign-logo.png'; 
import Fade from 'react-fade';
import Elfrodo from '../media/showcase/elfrodo.jpg';
import Baron from '../media/showcase/baron.jpg';
import Coffee from '../media/showcase/coffee.jpg';
import MultiActiv from '../media/showcase/multiactiv.jpg';
import Bio from '../media/showcase/bioherbarium.jpg';
import Lesniowska from '../media/showcase/herbatalesniowska.jpg';

class IndexPage extends React.Component {

    state = {
        showLogo: false
    };

    componentDidMount(){
        const that = this;
        window.addEventListener('scroll', function(e) {
            that.setState({showLogo: window.scrollY > window.innerHeight - 200 ? true : false});
        });
    }

    render(){
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
                    <div id="header-inner">
                        <img src={Logo} alt="Gaja design logo" />
                        <div id="header-content">
                            <p className="small-header"> natura inspiruje </p>
                            <p className={"type-1"}>Wiz<strong>ja</strong></p>
                            <p><strong>Pro</strong>jekt</p>
                            <p><strong>Real</strong>izacja</p>
                        </div>
                    </div>
                    <svg className="triangle left" width="21%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                        <path d="M0 100 L100 100 L0 10 Z"/>
                    </svg>
                    <svg className="triangle right" width="80%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                        <path d="M0 100 L100 100 L100 10 Z"/>
                    </svg>
                </div>
                <div id="gallery">
                    <img src={Elfrodo} alt="Elfrodo"/>
                    <div className={"stacked"}>
                        <img src={Baron} alt="Baron"/>
                        <img src={Baron} alt="Baron"/>
                    </div>
                    <div className={"stacked"}>
                        <img src={Coffee} alt="Coffee"/>
                        <img src={MultiActiv} alt="MutiActiv"/>
                    </div>
                    <img src={Bio} alt="Bio Herbarium"/>
                    <img src={Lesniowska} alt="Herbata Lesniowska"/>
                </div>
                <div id="contact">
                    <div className="heading">
                        <p>Chcesz porozmawiać o nowym projekcie?</p> 
                        <p>Skontaktuj się z nami!</p>
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
