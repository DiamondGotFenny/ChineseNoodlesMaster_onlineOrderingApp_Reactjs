import  React  from 'react';
import Cuisinestagslanding from '../../components/CuisinesTags_Landing';
import CuisinesTagsCollapsed from './../../components/CuisinesTagsCollapsed';

const cuisinesTags=['Si Chuan','Hu Bei','Guang Dong','Shang Hai','Hu Nan','Guang Xi'];
const cuisinesTagscollapsed=['Yun Nan','Shan Dong','Bei Jing','Zhe Jiang','Shan Xi','Ji Lin'];
const Menu=()=>{
    return (
        <section className="section bg-light">
            <h1 className="mb-6 text-center">Discover Our Noodles</h1>
            <Cuisinestagslanding cuisinesTags={cuisinesTags}/>
            <div className="text-center">
            <a
              data-toggle="collapse"
              href="#landing-page-menu-collapsed"
              aria-expanded="false"
              aria-controls="landing-page-menu-collapsed"
              ><span className="ti-arrow-circle-down"></span
            ></a>
            </div>
            <CuisinesTagsCollapsed tagsCollapsed={cuisinesTagscollapsed}/>
        </section>
    )
}
export default Menu;