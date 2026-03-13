import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhoThisIsFor from './components/WhoThisIsFor'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedCollections from './components/FeaturedCollections'
import JoinNetwork from './components/JoinNetwork'
import TrustSignals from './components/TrustSignals'
import InsightsTrends from './components/InsightsTrends'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhoThisIsFor />
      <WhyChooseUs />
      <FeaturedCollections />
      <JoinNetwork />
      <TrustSignals />
      <InsightsTrends />
      <Footer />
    </main>
  )
}

