import React, { Component, Fragment } from 'react'
import Profile from '../../components/Profile'



class Details extends Component{

  componentDidMount () {
    // fetch(`http://api.hotels.com/id/${this.props.id}`)
    //   .then(res => res.json())
    //   .then(hotel => {
    //     this.setState({ hotel })
    //   })
  }


  render(){
    const single = require(`../../data/${this.props.match.params.id}.json`)


    return(
      <div>
        <Profile
          key={single.id}
          id={single.id}
          name={single.name}
          description={single.description}
          stars={single.starRating}
          images={single.images}
          gallery={single.gallery}
          priceMin={single.priceMin}
          priceMax={single.priceMax}
          average={single.averageRatePerNight}
          availability={single.isAvailable}
          date={single.lastUpdate}
          plans={single.ratePlansAvailable}
        />
      </div>

    )
  }
}






export default Details
