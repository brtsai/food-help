import React from 'react';

class Business extends React.Component {
  componentDidMount () {
    this.props.fetchBusiness();
  }

  businessInfoSection() {
    return (
      <section>
        Business Info Section
      </section>
    );
  }

  businessGraphicsSection() {
    return (
      <section>
        Business Graphics Section
      </section>
    );
  }

  render () {
    console.log(this.props.business);
    return (
      <div>
        Business show Component
        
        { 
          this.businessInfoSection() 
        }
        
        {
          this.businessGraphicsSection()
        }
      </div>
    );
  }
}

export default Business;
