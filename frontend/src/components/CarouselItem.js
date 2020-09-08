import  React  from 'react';

const CarouselItem=(props)=>{
    const {imgLink,itemInfo,infoLine1,infoLine2,itemLink,btnInfo}=props.item;

    return(
        <div>
            <img  class="d-block img-responsive fixed-img-height" src={imgLink} alt={itemInfo} />
             <div class="carousel-caption caption-content dark px-2">
                <h1 class="text-muted">{infoLine1}</h1>
                <h5>{infoLine2}</h5>
                <div class="btn-group">
                    <a
                        href={itemLink}
                        data-target="#productModal"
                        data-toggle="modal"
                        class="btn btn-outline-primary">
                        <span>{btnInfo}</span>
                    </a>
                </div>
             </div>
         </div>
    )
}
export default CarouselItem;