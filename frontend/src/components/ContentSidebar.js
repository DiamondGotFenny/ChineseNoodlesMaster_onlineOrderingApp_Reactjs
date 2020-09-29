import { faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  React  from 'react';
import Nav  from 'react-bootstrap/Nav';

function ContentSidebar(props) {
    return(
          <div className="dark" >
         <Nav id="sidebar-nav" className="stick-to-content collapse show" 
          >
          <Nav.Item>
            <Nav.Link eventKey='Si Chuan'>
              Si Chuan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='Hu Nan'>
              Hu Nan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='Guang Dong'>
              Guang Dong
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='Guang Xi'>
              Guang Xi
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='Shang Hai'>
              Shang Hai
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='Hu Bei'>
              Hu Bei
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='backToHome' className='back-home-btn'>
              <FontAwesomeIcon icon={faChevronCircleLeft} size="4x"/>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
}

export default ContentSidebar;