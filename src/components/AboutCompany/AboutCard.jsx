
const AboutCard = ({content}) => {
  return (
    <div className=" bi-abut-feature-list-4 ul-li  fadeInUp my-4">
      <ul className='row  flex-wrap justify-content-center align-items-center p-0'>
        { 
          content?.map((item,ind)=><li key={ind} className='col-8  col-md-6 d-flex gap-1 align-items-center justify-content-center my-1 px-0'><i className={`text-start ${item.icon}`} style={{width:'20%'}}></i>  <span>{`${item.title}`}</span>   </li> 	 )
         }
									
									
									</ul>
    </div>
  )
}

export default AboutCard
