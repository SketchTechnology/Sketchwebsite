import Slider from "react-infinite-logo-slider";
import "./ImageSlider.css"; // Import CSS file for custom styling
import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";

const ImageSlider = () => {
  return (
    <div className="full-width-slider my-5">
      {" "}
      {/* Wrapper div for full width */}
      <Slider
        width={"400px"}
        duration={40}
        toRight={false}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <div className="badgeImage">
            <h5>UiUx</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet? Est reprehenderit, ducimus ut inventore impedit blanditiis doloremque suscipit sed.</p>
            <button className="button">
 →
</button>
            <LazyLoadingImage
              src={
                "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser1.png"
              }
              alt={"UiUx"}
              height={"400px"}
            />
          </div>
        </Slider.Slide>
        <Slider.Slide>
        <div className="badgeImage">
            <h5>Web Development</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet? Est reprehenderit, ducimus ut inventore impedit blanditiis doloremque suscipit sed.</p>
            <button className="button">
   →
</button>
          <LazyLoadingImage
            src={
              "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser2.png"
            }
            alt={"Web Development"}
            height={"400px"}
          />
          </div>
        </Slider.Slide>
        <Slider.Slide> 
        <div className="badgeImage">
            <h5>Mobile Apps</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet? Est reprehenderit, ducimus ut inventore impedit blanditiis doloremque suscipit sed.</p>
            <button className="button px-1">
   →
</button>
          <LazyLoadingImage
            src={
              "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser3.png"
            }
            alt={"Mobile Apps"}
            height={"400px"}
          />
          </div>
        </Slider.Slide>
        <Slider.Slide>
        <div className="badgeImage">
            <h5>UiUx</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet? Est reprehenderit, ducimus ut inventore impedit blanditiis doloremque suscipit sed.</p>
            <button className="button px-1">
   →
</button>
          <LazyLoadingImage
            src={
              "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser1.png"
            }
            alt={"UiUx"}
            height={"400px"}
          />
          </div>
        </Slider.Slide>
        <Slider.Slide>
        <div className="badgeImage">
            <h5>Web Development</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet? Est reprehenderit, ducimus ut inventore impedit blanditiis doloremque suscipit sed.</p>
            <button className="button px-1">
   →
</button>
          <LazyLoadingImage
            src={
              "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser2.png"
            }
            alt={"Web Development"}
            height={"400px"}
          />
          </div>
        </Slider.Slide>
        <Slider.Slide>
        <div className="badgeImage">
            <h5>Mobile Apps</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet? Est reprehenderit, ducimus ut inventore impedit blanditiis doloremque suscipit sed.</p>
            <button className="button px-1">
  →
</button>
          <LazyLoadingImage
            src={
              "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser3.png"
            }
            alt={"Mobile Apps"}
            height={"400px"}
          />
          </div>
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default ImageSlider;
