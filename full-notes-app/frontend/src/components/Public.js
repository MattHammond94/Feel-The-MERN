import { Link } from 'react-router-dom'

const Public = () => {
  const content = (
    <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Matts Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Land :Matts Reapirs: provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Matts Repairs<br />
                    444 four Drive<br />
                    Four City, Four-titude<br />
                    <a href="tel:+444444444444">(444) 444-4444</a>
                </address>
                <br />
                <p>Owner: Me baby me</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
  )
  return content 
}

export default Public