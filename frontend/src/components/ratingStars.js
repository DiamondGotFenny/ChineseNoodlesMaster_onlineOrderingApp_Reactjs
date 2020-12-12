import  React  from 'react';
import Rater from 'react-rater'

const Ratings=(props)=>{
    const {rating,interactive,onRate}=props;
    
    
    return (
            <Rater total={5} rating={rating} interactive={interactive} onRate={onRate}/>
    )
}
export default Ratings;