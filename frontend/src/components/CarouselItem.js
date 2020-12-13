import  React  from 'react';

const CarouselItem=(props)=>{
    const {imgLink,itemInfo,infoLine1,infoLine2,itemLink,btnInfo}=props.item;

    return(
        <>
            <img  className="d-block img-responsive fixed-img-height" src={imgLink} alt={itemInfo} />
             <div className="carousel-caption caption-content dark px-2">
                <h2 className="text-muted">{infoLine1}</h2>
                <h5>{infoLine2}</h5>
                <div className="btn-group">
                    <button
                        href={itemLink}
                        data-target="#productModal"
                        data-toggle="modal"
                        className="btn red-outline-btnlg btn-red-fill">
                        <span>{btnInfo}</span>
                    </button>
                </div>
             </div>
         </>
    )
}
export default CarouselItem;