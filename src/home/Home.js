import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Layout,
	Panel,
	NavDrawer,
	IconButton,
	Dialog,
	Snackbar
} from 'react-toolbox';


class Home extends Component {
	componentWillMount() {

	}

	render() {


		return (
      <div>
        <header>
          <div className="container">
              <div className="intro-text">
                  <div className="intro-video embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mII9NZ8MMVM" frameBorder="0" allowFullScreen></iframe>
                  </div>

                  <a href="#services" className="tell-more page-scroll btn btn-xl">Tell Me More</a>
              </div>
          </div>
        </header>

        <section id="services">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">The Campaign</h2>
                      <h3 className="section-subheading text-muted">HereNames how it works...</h3>
                  </div>
              </div>
              <div className="row text-center">

                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-life-ring fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">The Economy Needs Us</h4>
                      <p className="text-muted">The U.S. ecomony depends on the money that goes through undocumented immigrants. We buy things.</p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-pie-chart  fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">How Much Money?</h4>
                      <p className="text-muted">To prove the inextricable value and nature of undocumented immigrants, we created #UndocuMoney.</p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">#UndocuMoney</h4>
                      <p className="text-muted">Every dollar bill that a participating undocumented person handles will have the hashtag #Undocumoney written on it and be posted to social media.</p>
                  </div>
              </div>
          </div>
      </section>

      <section id="portfolio" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Stories</h2>
                    <h3 className="section-subheading text-muted">Here are just some examples.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="http://lorempixel.com/600/450/people" className="img-responsive" alt=""/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Juan Doe</h4>
                        <p className="text-muted">City, State</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="http://lorempixel.com/600/450/people" className="img-responsive" alt=""/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Jasmin Doe</h4>
                        <p className="text-muted">City, State</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 portfolio-item">
                    <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="http://lorempixel.com/600/450/people" className="img-responsive" alt=""/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Juan Doe</h4>
                        <p className="text-muted">City, State</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 portfolio-item">
                    <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="http://lorempixel.com/600/450/people" className="img-responsive" alt=""/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Maria Doe</h4>
                        <p className="text-muted">City, State</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Participate</h2>
                    <h3 className="section-subheading text-muted">It is realy easy to participate!</h3>
                </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 portfolio-item">
                  <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="http://lorempixel.com/600/450/abstract" className="img-responsive" alt="" />
                  </a>
                  <div className="portfolio-caption">
                      <h4>Label the Bills</h4>

                  </div>
              </div>
              <div className="col-md-6 col-sm-6 portfolio-item">
                  <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="http://lorempixel.com/600/450/abstract" className="img-responsive" alt="" />
                  </a>
                  <div className="portfolio-caption">
                      <h4>Share On Social Media</h4>

                  </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="btn-group" role="group" aria-label="...">
                <a href="https://twitter.com/undocumoney" target="_blank" type="button" className="btn btn-primary btn-lg">Twitter</a>
                <a href="https://www.facebook.com/undocumoney" target="_blank" type="button" className="btn btn-primary btn-lg">Facebook</a>
                <a href="#" target="_blank" type="button" className="btn btn-primary btn-lg">Instagram</a>
              </div>
            </div>


        </div>
    </section>


      </div>
		);
	}
}

Home.propTypes = {

};

function mapStateToProps(state) {
	return {
		i18n: state.i18n.copy[state.i18n.ui.current],

	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
