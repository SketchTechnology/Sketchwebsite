import { useTranslation } from "react-i18next";
import MainBtn from "../Buttons/MainBtn";
import ImageSlider from "../ImageSlider/ImageSlider";
import Titles from "../Titles/Titles";
import HoverSlider from '../HoverSlider/HoverSlider'
import { useNavigate } from "react-router";
const OurServices = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="ServiceParent">
      <div className="container  mx-auto">
        <div className="row flex-wrap flex-column  flex-md-row">
          <div className="col-12 col-md-6 my-2">
            <Titles
              secondtitle={t("OurBestServices.OurService")}
              maintitle={t("OurBestServices.WhereInnovation")}
            />
          </div>
          <div className="col-12 col-md-6  d-flex  align-items-center justify-content-start justify-content-md-end" onClick={()=>navigate('Services')}>
            <MainBtn content={"More Services"} />
          </div>
        </div>
      </div>
      {/* <HoverSlider/> */}
      <ImageSlider/>
    </div>
  );
};

export default OurServices;
