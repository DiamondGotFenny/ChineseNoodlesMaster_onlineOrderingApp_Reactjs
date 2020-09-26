import  React, { useEffect, useState }  from 'react';
import httpService from 'services/httpService';
function PageHighlight() {
  const [highlightItem,sethighlightItem]=useState({});
    //the requeted data is stored in local because the other 
    //components don't need to know this pieces of data.
    async function fetchHighlightItem() {
        const {data}=await httpService.get('/PageHighlights');
        sethighlightItem(data)
    }
    useEffect(()=>{ fetchHighlightItem() },[]);
    //the property name is mutable, based on the url pathname.
    const item={...highlightItem["GuangDong"]};

    return (
        <section class="page-highlight" style={{backgroundImage:`url(${item.img})`}}>
            <h1 class="main-title">
            {item.mainTitle}
            </h1>
            <p class="secondary-title">
            {item.secondaryTitle}
            </p>
        </section>
    )
}
export default PageHighlight;