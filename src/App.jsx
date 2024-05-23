import './App.css'
import AboutCompany from './components/AboutCompany/AboutCompany';
import HeroSections from './components/HeroSection/HeroSections';
import OurExpertTeam from './components/OurExpertTeam/OurExpertTeam';
import OurServices from './components/OurServices/OurServices';
import Portfolio from './components/Portfolio/Portfolio';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import TitleSlider from './components/TitleSlider/TitleSlider';
import PricingList from './components/PricingList/PricingList';
import Test from './components/Test/Test';
import DragContainer from './components/DraggableSquare/DraggableSquare';
import DraggableSquare from './components/DraggableSquare/DraggableSquare';

function App() {

  return (
    <div >
<HeroSections/>
<AboutCompany/>
<OurServices/>
<WhyChooseUs/>
<Portfolio/>
{/* <DraggableSquare /> */}
<TitleSlider/>
 <PricingList/> 

    </div>
  )
}

export default App
