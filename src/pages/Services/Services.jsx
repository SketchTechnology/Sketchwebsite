import HeadSec from "../../components/HeadSec/HeadSec"
import Quality from "../../components/QualityComp/Quality"

const Services = () => {
    const BtnsContent =[
        {
            content:'Home',
            nav:'/',
            active:false
        },
        {
            content:'Services',
            nav:'',
            active:true
        }
    ]
    const Title = 'Services'

  return (
    <div>
  <HeadSec BtnsContent={BtnsContent} Title={Title}/>
<Quality/>    </div>
  )
}

export default Services
