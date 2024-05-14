import MainBtn from "../Buttons/MainBtn";
import ImageSlider from "../ImageSlider/ImageSlider";
import Titles from "../Titles/Titles";

const OurServices = () => {
  return (
    <div>
      <div className="container  mx-auto">
        <div className="row flex-wrap flex-column flex-md-row">
          <div className="col-12 col-md-6">
            <Titles
              secondtitle={"OUR BEST SERVICES"}
              maintitle={"Unlock Revenue Grow for you BusinessMORE PORTFOLIO"}
            />
          </div>
          <div className="col-12 col-md-6  d-flex  align-items-center justify-content-start justify-content-md-end">
            <MainBtn content={"more portfolio"} />
          </div>
        </div>
      </div>
      <ImageSlider/>
    </div>
  );
};

export default OurServices;
