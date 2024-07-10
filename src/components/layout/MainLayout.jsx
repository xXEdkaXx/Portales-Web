import Header from '../header/Header';
import Footer from '../footer/Footer';
const MainLayout =({ children }) => {
    return (
        <section className='page'>
            <Header />
                <main>
                    {children}
                </main>
            <Footer/>
        </section>
    );
}

export default MainLayout;