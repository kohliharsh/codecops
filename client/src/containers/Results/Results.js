import React from "react";
import "./Results.css";
import ResultCard from "../../components/resultCard/ResultCard";
import {resultsSection} from '../../CodeCops'
import { Fade } from "react-reveal";
import {Link} from "react-router-dom";
import banner from "../../img/banner.png";


export default function Results() {
    if(resultsSection.viewResults){
        return (
            <div id="result" className='events'
                 style={{ marginBottom: "20px", marginTop: "130px", overflow: "hidden" }}>
                <div className='banner'>
                    <Link to='/goc'>
                        <img data-aos='zoom-out' data-aos-duration='500' src={banner} />
                    </Link>
                </div>
                <div className='upcoming container' style={{marginTop:"3rem"}}>
                    <h1>Winners (In Individual Category)</h1>
                </div>
                <Fade bottom duration={1000} distance="20px">
                <div className="result-container" id="workresult">
                    <div>{/*
                        <div className="result-header">
                            <h1 className="result-heading"></h1>
                            <p className="subTitle result-subtitle"></p>
                        </div>*/}
                        <div className="result-cards-div">
                        {resultsSection.individualResults.map((card) => {
                            return (
                                <ResultCard
                                    cardInfo={{
                                        image: card.image,
                                        title: card.title,
                                        subtitle: card.subtitle,
                                        desc: card.desc,
                                        url: card.url,
                                        content: card.content,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>

                <div className='upcoming container' style={{marginTop:"3rem"}}>
                    <h1>Winners (In Team Category)</h1>
                </div>
                <Fade bottom duration={1000} distance="20px">
                    <div className="result-container" id="workresult">
                        <div>{/*
                            <div className="result-header">
                                <h1 className="result-heading"></h1>
                                <p className="subTitle result-subtitle"></p>
                            </div>*/}
                            <div className="result-cards-div">
                                {resultsSection.teamResults.map((card) => {
                                    return (
                                        <ResultCard
                                            cardInfo={{
                                                image: card.image,
                                                title: card.title,
                                                subtitle: card.subtitle,
                                                desc: card.desc,
                                                url: card.url,
                                                content: card.content,
                                                descBullets: card.descBullets
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Fade>
                <p style={{marginTop:"1rem"}}>* Runner Up Team in Machine Learning was choosen as no individual qualified for final round</p>
            </div>
        );
    }
    return null;
}
