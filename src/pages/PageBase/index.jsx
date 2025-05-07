import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PageBase({ children }) {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false     
        });
      }, []);

    return (
        <main>
            <Header />
            <Container>
                 { children }
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase
