import HeadSec from "../../components/HeadSec/HeadSec"
import CreativeAgency from "../../components/CreativeAgency/CreativeAgency"
import LogoSlider from "../../components/LogoSlider/LogoSlider"
import VissionAndMission from "../../components/VisionAndMission/VissionAndMission"

const AboutUs = () => {
  const BtnsContent =[
    {
        content:'Home',
        nav:'/',
        active:false
    },
    {
        content:'About',
        nav:'',
        active:true
    }
]
const Title = 'About Us'
  return (
    <div>
      <HeadSec BtnsContent={BtnsContent} Title={Title}/>
      <CreativeAgency/>
      <VissionAndMission/>
      <LogoSlider/>

    </div>
  )
}

export default AboutUs
