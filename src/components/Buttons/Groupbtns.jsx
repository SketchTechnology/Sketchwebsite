import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './GroupBtn.css'
import { useNavigate } from 'react-router';
function Groupbtns({content}) {
    const navigate = useNavigate('')
  return (
    <ButtonGroup aria-label="Basic example"  className='btnGroup'>
        {
            content.map((item,ind)=><Button key={ind} variant="secondary" className={`${item.active&&'text-main'} `} onClick={()=>navigate(item.nav)}>{item.content}</Button>)
        }
   
   
    </ButtonGroup>
  );
}

export default Groupbtns;