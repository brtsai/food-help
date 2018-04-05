import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <footer className="page-footer">
        <h2 className="footer-links-title">About the Developer</h2>
        <ul className="footer-links-list">
          <li className="footer-links-list-item"><a href="https://github.com/brtsai"><i className="fa fa-github"></i></a></li>
          <li className="footer-links-list-item"><a href="https://www.linkedin.com/in/bryan-tsai-b2606610a"><i className="fa fa-linkedin"></i></a></li>
          <li className="footer-links-list-item"><a href="https://www.ucsc.edu/"><i className="fa fa-graduation-cap"></i></a></li>
          <li className="footer-links-list-item"><a href="https://www.instagram.com/tsaiclone/"> <i className="fa fa-instagram"></i></a></li>
        </ul>

        <figure className="footer-cityscape-image">
          <img src="https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/ce4d102c522c/assets/img/structural/footer_cityscape@2x.png"></img>
        </figure>
      </footer>
    );
  }
}

export default Footer;
