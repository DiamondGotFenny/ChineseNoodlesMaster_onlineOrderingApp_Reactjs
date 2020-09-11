import  React  from 'react';

const UsFeature=(props)=>{
    const {title,detail,icon}=props.featureInfo
    return(
        <div className="feature feature-1">
            <div className="feature-icon icon icon-primary mt-3">
                <i className={icon}></i>
            </div>
            <div className="feature-content">
            <h4 className="mb-2">{title}</h4>
                <p className="text-muted mb-0">
                    {detail}
                </p>
            </div>
        </div>
    )
}
export default UsFeature;