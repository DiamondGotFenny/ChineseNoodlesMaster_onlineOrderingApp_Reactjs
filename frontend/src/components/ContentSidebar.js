import  React  from 'react';
import  Col from 'react-bootstrap/Col';
import Nav  from 'react-bootstrap/Nav';


function ContentSidebar(props) {
    return(
        <Col className="sidebar-nav-container nav-sticky" md={3}>
         <Nav id="sidebar-nav" className="stick-to-content bg-dark collapse show" 
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
        </Nav>
      </Col>
    )
}

export default ContentSidebar;