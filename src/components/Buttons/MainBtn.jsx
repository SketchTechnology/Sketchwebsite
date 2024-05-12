const MainBtn = ({ content }) => {

  return (
    <button
      data-aos="fade-right"
      data-aos-delay="1900"
      data-aos-once={true}
      className="MainBtn d-flex justify-content-around align-items-center rounded-pill py-2 border-0 "
    >
      <span> {content}</span>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
};

export default MainBtn;
