import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeadingIcon from '../../assets/images/icons/purple-heart.svg';


import './styles.css';

function Landing(){
    return(

        <div id="page-laNding">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div> {/* logo-container */}

                <img 
                    src={landingImg} alt="plataforma" className="hero-image"
                />

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassIcon} alt="Dar aula"/>
                        Dar aula
                    </a>
                </div>{/* buttons-container */}

                <span className="total-connections">
                    Total de 10000 conexões ká realizadas <img src={purpleHeadingIcon} alt="Coração roxo"/> 
                </span>
            </div> {/* page-landing-content */}
        </div> /* page-landing */
    )
}

export default Landing;