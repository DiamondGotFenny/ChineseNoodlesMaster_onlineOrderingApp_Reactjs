import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  /*scroll to page top when router changes. if you only want to apply this to a specific component, you can use track pathname in that component with this: 
  const {pathname}=useLocation;
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  */
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);