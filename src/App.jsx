import Hero from './sections/Hero'
import SuperQuality from './sections/SuperQuality'

import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CoustomerReviews from './sections/CoustomerReviews'

import Footer from './sections/Footer.jsx'
import Nav from './components/Nav.jsx'
const App = () => {
  return (
    
  <main>
  <section>
    <h1 className=" wide:padding-r padding-b">
      <Nav />
    </h1>
  </section>
  <section className='xl:padding-l wide:padding-r padding-b'>
    <Hero />
  </section>
  <section className="padding">
    <SuperQuality />
  </section>
  <section className="padding">
    <Services />
  </section>
  <section className="padding">
    <SpecialOffer />
  </section>
  <section className="padding bg-pale-blue">
    <CoustomerReviews />
  </section>

  <section className="padding-x padding-y bg-black pb-8">
    <Footer/>
  </section>
</main>
  )
}

export default App