# [![food help logo](https://github.com/brtsai/food-help/blob/master/documentation/assets/logo/logo.png)](https://food-help.herokuapp.com/#/)

[Food Help](https://food-help.herokuapp.com/#/) is a crowdsourced business review website for rating and ranking Restaurants and other Food related Businesses. Food Help leverages a Ruby on Rails server coupled with a PostgreSQL Database on the Backend, along with React for presentation, and Redux for state on the Frontend.

## Key Features

*   Login, Create a New Account, or simply browse as a Guest
*   Add Businesses, and help fill Food Help's communal database
*   Search for Businesses, and receive a list ranked by relevance!
*   Need help finding a place? No problem. Click on the business' static map to get an interactive google maps modal!
*   Write a review, watch your review always appear first for you!
*   Create, Edit, Delete your review in place, on the same page of your browser!
*   Don't like a review you posted? Change it, or even do away with it altogether!

## How To Get

Head on over to [Food Help](https://food-help.herokuapp.com/#/) and start reviewing!

## Cool Features

#### Ranked Search by Relevance

# ![search usage gif](https://github.com/brtsai/food-help/blob/master/documentation/assets/usage-gifs/search-usage.gif)

#### Reviews

*   Write/edit/delete reviews on the same page
*   Your reviews are always on top
# ![search usage gif](https://github.com/brtsai/food-help/blob/master/documentation/assets/usage-gifs/reviews-usage.gif)

## Behind the Scenes

#### Search

*   Splits Search Phrase into search term Words
*   Records number of times a business is returned by searching for businesses with relevant fields that match
*   Also checks businesses that fall under categories that include search terms in the category name
*   Returns businesses in descending order of most pinged

```ruby
def index
    p params[:search_string]
    search_string = params[:search_string]
    business_hash = Hash.new(0)

    unless search_string.nil? || search_string.empty?
      search_string.split(/[ ,]/).reject { |str| str.empty? }.each do |term|
        record_business_query_results(term, business_hash)
        record_category_query_results(term, business_hash)
      end
      top_five_in_hash = business_hash.sort { |l, r| r[1] <=> l[1] }.first(5)
      top_five_business_ids = top_five_in_hash.map { |id, count| id }

      unless top_five_business_ids.empty?
        @business_ids = top_five_business_ids
        @businesses = Business.find_with_ids(top_five_business_ids)
        render "api/search/index"
      else
        render json: ["No results found"], status: 422
      end
    else
      render json: ["Search string can't be empty"], status: 422
    end
  end
  
  def record_business_query_results_by_field(field, term, hash)
    like_field_businesses = Business.where("lower(#{field}) like ?", "%#{term}%".downcase)
    like_field_businesses.each do |business|
      hash[business.id] += 1
    end
  end

  def record_business_query_results (term, hash)
    record_business_query_results_by_field("name", term, hash)
    record_business_query_results_by_field("neighbourhood", term, hash)
    record_business_query_results_by_field("address", term, hash)
  end

  def record_category_query_results (term, hash)
    like_categories = BusinessCategory.where("lower(category) like ?", "%#{term}%".downcase)
    like_categories.each do |category|
      category.businesses.each do |business|
        hash[business.id] += 1
      end
    end
  end
```

#### In Place Reviews

*   Decide what to render/do based on two criteria
       1. Is the review form open?
       2. Does the current user already have a review?

```javascript
    constructor (props) {
        //
        this.state = {
          formOpen: false,
        };
        //
    }
    
    userHasReview () {
        return this.props.userReview !== undefined;
    }

    renderUserReviewThings () {
        return (this.state.formOpen ? this.renderReviewForm() : this.renderUserReview() );
    }
    
    renderCreateReviewThings () {
        return (this.state.formOpen ? this.renderReviewForm() : this.renderCreateReviewButton());
    }

    render () {
        //
        {
            this.userHasReview() ?
              this.renderUserReviewThings()
            :
              this.renderCreateReviewThings()
          }
        }
        //
    }
```

## Technology Choices

#### Why Ruby on Rails?

Ruby on Rails is a great tool for faster development cycles. Rails allows developers to start a project, and start seeing results almost immediately. In fact, Food Help was built over the course of two weeks.  
`"Move Fast and Break Things"` <cite>- Facebook</cite>

For its speed and many other reasons Ruby on Rails has been used for many other products and services you may have encountered before. Namely,  

*   [AirBnB](https://www.airbnb.com/)
*   [CrunchBase](https://www.crunchbase.com/)
*   [Bloomberg](https://www.bloomberg.com/)
*   [Github](https://github.com/)
*   [KickStarter](https://www.kickstarter.com/)

#### Why PostgreSQL?

Food Help's core product features are based on crowdsourcing information, which requires a high degree of reliability, and stability, especially during significant read/write traffic (crowdsourced adding, rating, reviewing businesses). PostgreSQL provides a beautiful implementation of MVVC, or Multi Version Concurrency Control.  
`"Multi-Version Concurrency Control (MVCC) allows Postgres to offer high concurrency even during significant database read/write activity. MVCC specifically offers behavior where 'readers never block writers, and writers never block readers'."` <cite>- http://momjian.us/main/presentations/internals.html#mvcc</cite>

#### Why React?

##### **_Efficiency_**

Rerendering and conditional rerendering essentially boils down to editing/transforming the DOM/CSSOM tree in your browser, which can be pretty hairy considering trees are combinatorial(think n choose k, factorials) data structures in nature. Thankfully, where combinatorics is involved, similar problems faced in real life tend to be quite amenable to heuristic solutions. As is the case with React's conditional rerendering _Reconciliation_ algorithm:  
`"There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree. If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm..."`  
<cite>- https://reactjs.org/docs/reconciliation.html</cite>

#### Why Redux?

##### **_DFA Properties_**

Redux is essentially based on the Deterministic Finite Automata computational model which has plenty of useful and interesting properties. Of which, one of the more identifiably useful properties is determinism.  
Determinism between state transitions in Redux allows for replayability of user interactions with your product which leads to robust and reliable debugging of errors and features, resulting in an overall better product.

##### **_Separation of Concerns_**

Using Redux in conjunction with React allows for greater separation of concerns on the frontend between presentational components, and stateful components that keep track of the user's session and browser state. This Separation of Concerns allows for a much cleaner and robust codebase which means that easily convoluted programming patterns such as prop threading are no longer necessary (unless of course, your codebase happens to be a labyrinth and your name happens to be Theseus).

## Credits

This webapp uses APIs and assets hosted by other sources.

*   Login Art and Cityscape Footer Art: Yelp
*   Maps: Google Maps Static and Interactive Maps APIs
*   Business trifold and Stock profile images: Hosted by Instagram (Images from my instagram, links from pictaram.net's instagram scraper)

Other

*   Component Wireframes created using [Balsamiq](https://github.com/brtsai/food-help/wiki/Component-Hierarchy)
