<h1 align="center">
  <a href="https://food-help.herokuapp.com/#/"><img src="https://github.com/brtsai/food-help/blob/master/documentation/assets/logo/logo.png" alt="Markdownify" width="280"></a>
</h1>

<p>
  Food Help is a crowdsourced business review website for rating and ranking Restaurants and other Food related Businesses. 
  Food Help leverages a Ruby on Rails server coupled with a PostgreSQL Database on the Backend, along with React for presentation, and Redux for state on the Frontend.
</p>

<p>
  Why PostgreSQL? Food Help's core product features are based on crowdsourcing information, which requires a high degree of reliability, and stability, especially during significant read/write traffic (crowdsourced adding, rating, reviewing businesses). PostgreSQL provides a beautiful implementation of MVVC, or Multi Version Concurrency Control. <br />
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

Head on over to <a href="https://food-help.herokuapp.com/#/">food-help.herokuapp.com</a> and start searching!

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
