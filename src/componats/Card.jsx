import Home from "./Home"
import RatingReview from './RatingReview';

const Card = (props) => {
  return (
    <div className="card">
    <img src= {props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
  )
}

export default Card;