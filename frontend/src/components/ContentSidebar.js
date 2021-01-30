import { faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  React  from 'react';
import Nav  from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ContentSidebar(props) {
  //the keywords should comes from the server in real projects, due to the business scale. 
  const filterKeywords=['All','Si Chuan','Hu Nan','Guang Dong','Guang Xi','Shang Hai','Hu Bei']
  const removeTagSpace=(item)=>{
    if(item==="All") return "";
    const itemStr=item.replace(/\s/g, '').toLowerCase();
    return itemStr;
  }
const adrs=useSelector(state=>state.address_input);
    return(
          <div className="dark" >
         <Nav id="sidebar-nav" className="stick-to-content collapse show" 
          >
          {filterKeywords.map(item=><Nav.Item key={item}><Link to={`/products?q=${removeTagSpace(item)}&address=${adrs}`}>{item}</Link></Nav.Item>)}
          <Nav.Item>
            <Link to={'/'} className='back-home-btn'>
              <FontAwesomeIcon icon={faChevronCircleLeft} size="4x"/>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    )
}

export default ContentSidebar;