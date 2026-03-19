import FeaturedCollections from './components/FeaturedCollections'
import Footer from './components/Footer'
import HeroSectionV3 from './components/HeroSectionV3'
import InsightsTrends from './components/InsightsTrends'
import JoinNetwork from './components/JoinNetwork'
import Navbar from './components/Navbar'
import TrustSignals from './components/TrustSignals'
import WhoThisIsFor from './components/WhoThisIsFor'
import WhyChooseUs from './components/WhyChooseUs'

const page = () => {
  return (
    <div>
      <HeroSectionV3 />
        <Navbar />
            <WhoThisIsFor />
            <WhyChooseUs />
            <FeaturedCollections />
            <JoinNetwork />
            <TrustSignals />
            <InsightsTrends />
            <Footer />
    </div>
  )
}

export default page
