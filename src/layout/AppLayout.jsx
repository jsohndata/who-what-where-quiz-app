import NavMenu from './NavMenu';
import Footer from './Footer';

export default function AppLayout({ children }) {

  return(
    <div id="main-container">      
      {children}
      <NavMenu />
      <Footer />
    </div>
  );
};
