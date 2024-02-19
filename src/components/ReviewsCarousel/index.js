// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeProfile: 0,
  }

  onClickRightArrow = () => {
    const {activeProfile} = this.state
    const {reviewsList} = this.props
    if (activeProfile < reviewsList.length - 1) {
      this.setState(prevState => ({activeProfile: prevState.activeProfile + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {activeProfile} = this.state
    if (activeProfile > 0) {
      this.setState(prevState => ({activeProfile: prevState.activeProfile - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeProfile} = this.state
    const UpdatedReviewProfile = reviewsList[activeProfile]
    const {imgUrl, username, companyName, description} = UpdatedReviewProfile
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
