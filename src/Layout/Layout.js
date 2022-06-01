import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

function Layout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            <main className="main">{children}</main>
            {/* <Footer/> */}
        </>
    );
}

export default Layout;
