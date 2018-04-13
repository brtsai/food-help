<h1 align="center">
  <a href="https://food-help.herokuapp.com/#/"><img src="https://github.com/brtsai/food-help/blob/master/documentation/assets/logo/logo.png" alt="Markdownify" width="280"></a>
</h1>

<p>
  <a href="https://food-help.herokuapp.com/#/">Food Help</a> is a crowdsourced business review website for rating and ranking Restaurants and other Food related Businesses. 
  Food Help leverages a Ruby on Rails server coupled with a PostgreSQL Database on the Backend, along with React for presentation, and Redux for state on the Frontend.
</p>

<h2>
  Technology Choices
</h2>

<h4>
  Why Ruby on Rails?
</h4>

<p>
  Ruby on Rails is a great tool for faster development cycles. Rails allows developers to start a project, and start seeing results almost immediately. In fact, Food Help was built over the course of two weeks. 
  <br />
  <code> Move Fast and Break Things</code> <cite>- Facebook </cite>
  
<p> For its speed and many other reasons Ruby on Rails has been used for many other products and services you may have encountered before. Namely, <br />
<ul>
  <li><a href="https://www.airbnb.com/">AirBnB</a></li>
  <li><a href="https://www.crunchbase.com/">CrunchBase</a></li>
  <li><a href="https://www.bloomberg.com/">Bloomberg</a></li>
  <li><a href="https://github.com/">Github</a></li>
  <li><a href="https://www.kickstarter.com/">KickStarter</a></li>
</ul>

</p>

<h4> 
  Why PostgreSQL?
</h4>

<p>
Food Help's core product features are based on crowdsourcing information, which requires a high degree of reliability, and stability, especially during significant read/write traffic (crowdsourced adding, rating, reviewing businesses). PostgreSQL provides a beautiful implementation of MVVC, or Multi Version Concurrency Control. <br />
  <code>Multi-Version Concurrency Control (MVCC) allows Postgres to offer high concurrency even during significant database read/write activity. MVCC specifically offers behavior where "readers never block writers, and writers never block readers".</code> <cite>-  http://momjian.us/main/presentations/internals.html#mvcc </cite>
</p>

<h2>
Key Features
</h2>

<ul>
  <li>
    Login, Create a New Account, or simply browse as a Guest
  </li>
  <li>
    Add Businesses, and help fill Food Help's communal database
  </li>
  <li>
     Search for Businesses, and receive a list ranked by relevance!
  </li>
  <li>
     Need help a place? No problem. Click on the business' static map to get an interactive google maps modal!
  </li>
  <li>
    Crowdsource Business Reviews and Ratings
  </li>
  <li>
    Don't like a review you posted? Change it, or even do away with it altogether!  
  </li>
</ul>

<h2>
How To Use
</h2>

Head on over to <a href="https://food-help.herokuapp.com/#/">Food Help</a> and start reviewing!

<h2>
Credits
</h2>

This webapp uses APIs and assets hosted by other sources.
<ul>
  <li>
     Login Art and Cityscape Footer Art: Yelp
  </li>
  <li>
     Maps: Google Maps Static and Interactive Maps APIs
  </li>
  <li>
     Business trifold and Stock profile images: Hosted by Instagram (Images from my instagram, links from pictaram.net's instagram scraper)
  </li>
</ul>
