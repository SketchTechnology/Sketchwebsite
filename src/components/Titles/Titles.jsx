import './titles.css'
const Titles = ({maintitle,secondtitle}) => {
  console.log(secondtitle)
  return (
    <div className='container p-0 p-md-2'>
      <div className="d-flex align-items-center">
      <h5 className='subTitle  '>
        {secondtitle}
      </h5>
      <span></span>
      </div>
      <h2 className='mainTitle '>{maintitle}</h2>
    </div>
  )
}

export default Titles
