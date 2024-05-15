import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import "./OurExpertTeam.css";
import userOne from "../../assets/img/team/tm1.png";
import userTwo from "../../assets/img/team/tm2.png";
import MemberCard from "../MemberCard/MemberCard";
import { useTranslation } from "react-i18next";
const OurExpertTeam = () => {
  const {t} =useTranslation()
    const Members = [
        {
            name:'heba',
            src:userOne,
            prof:'Full-Stack Developer'
        },
        {
            name:'heba',
            src:userTwo,
            prof:'Full-Stack Developer'
        },
        {
            name:'heba',
            src:userOne,
            prof:'Full-Stack Developer'
        },
    ]
  return (
    <div className="OurTeam ">
        <div className="titleMain d-flex gap-2 justify-content-center align-items-center">

        <span></span>
      <p className="TeamTitle">{t('OurExpertTeam')}</p>
      <span></span>
        </div>
      <div className="container mx-auto gap-3 d-flex  flex-wrap justify-content-center ">
     {
        Members.map((member,index)=><MemberCard member={member} key={index} />)
     }
      </div>
    </div>
  );
};

export default OurExpertTeam;
