import  React  from 'react';
import Rater from 'react-rater'

const Ratings=(props)=>{
    const rating=props.rating;
    return (
            <Rater total={5} rating={rating}/>
    )
}
export default Ratings;