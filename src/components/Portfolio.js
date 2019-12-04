import React, { Component } from 'react';



export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} alt="img" className="item-imgurl"/>
                      <a href={`${item.urlimg}`} rel="noopener noreferrer" target="_blank">
                    
                      <div className="overlay">
                      <div className="portfolio-item">

                        
                  </div> 
                </div>
                </a>
                      <h5>{item.name}</h5>
                        <p>{item.description}</p>
                </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}