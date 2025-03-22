import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className="apresentacao">
                <p>
                    Olá, sou <br/>
                    <span>Miguel Xavier</span> <br/>
                    Dev Full Stack
                </p>
                <button className="btn Info">
                    Saiba mais
                </button>
                </div>
                <figure>
                <img className="img-home" src="/feeling-proud-blue.svg" alt="Imagem da home" />
                </figure>
            </section>
            <Footer />
    </>
    )
}

export default Home
