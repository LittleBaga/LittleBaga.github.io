import React, { Component } from 'react';
export default class Language extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="Languages">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Languages</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.Language && resumeData.Language.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.languagename}
                            </p>
                            <p>{item.description}</p>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}