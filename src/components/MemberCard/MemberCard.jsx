import LazyLoadingImage from '../LazyLoadingImg/LazyLoadingImg'

const MemberCard = ({member}) => {
  return (
    <div className="cardContainer ">
    <div className="profileDiv ">
      {" "}
      <LazyLoadingImage src={member.src} alt={"userOne"} />
    </div>
    <div className="infoDiv  rounded-4">
      <div className="nameDiv">
        <p className="name">{member.name}</p>
        <p className="role">{member.prof}</p>
      </div>
      <div className="socialDiv rounded-4   d-flex justify-content-center align-items-end">
      <i className="fa-solid fa-at socials text-dark w-100  text-center fs-2 "></i>       
      </div>
    </div>
  </div>
  )
}

export default MemberCard
