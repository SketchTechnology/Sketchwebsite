import HeadSec from '../../components/HeadSec/HeadSec'
import './Blogs.css'
import img from '../../assets//img/blog/blg1.jpg'
import img1 from '../../assets//img/blog/blg2.jpg'
import img2 from '../../assets//img/blog/blg3.jpg'
import img3 from '../../assets//img/blog/blg4.jpg'
import star from '../../assets/img/icon/star2.png'
import { useEffect } from 'react'
import Aos from 'aos'
export const Blogs = () => {
    const BtnsContent =[
        {
            content:'Home',
            nav:'/',
            active:false
        },
        {
            content:'Blogs',
            nav:'',
            active:true
        }
    ]
    const Title = 'Blogs'
    const data =[
      {
        img:img,
        
      },
      {
        img:img1,

      },
      {
        img:img3,

      },
      {
        img:img2,

      }
    ]
    useEffect(() => {
      Aos.init({ once: true });
    }, []);
  return (
    <div>
    <HeadSec BtnsContent={BtnsContent} Title={Title}/>
   <div className="container py-5 mx-auto">
   <div className="d-flex gap-2 align-items-center  justify-content-center portfolioTitle">
<span></span>
<h5 className='text-center' >Our Blogs</h5>
<span></span>
</div>
<h2 className=' text-center text-dark'>
Latest From the Blog
</h2>
    <div className="px-5 py-2 mx-auto">
      {
        data.map((item,ind)=><div key={ind} className="row my-5 blogsData " >
        <div className="col-12 col-md-6  p-0 rounded-3 overflow-hidden  h-100" data-aos={ind % 2 === 0 ? 'fade-right' : 'fade-left'}>
        <img src={item.img} alt="" width={'100%'} height={'100%'} style={{objectFit:'cover'}} />
        </div>
        <div className="col-12 col-md-6 blogContent d-flex flex-column gap-3 align-items-start position-relative ">
          <div className='d-flex  blogPillsCont justify-content-center align-items-center' data-aos={ind % 2 === 0 ? 'fade-right' : 'fade-left'}>
            <div className="pill">
              8 october 6,2023
            </div>
            <div className="linePill"></div>
            <div className="starBlog">
              <img src={star} alt="" />
            </div>
          </div>
          <h2 className='text-dark' data-aos={ind % 2 === 0 ? 'fade-right' : 'fade-left'}>Working Together, ideas Come to Life </h2>
          <p className='text-dark' data-aos={ind % 2 === 0 ? 'fade-right' : 'fade-left'}>No matter how big your company is, as you expand and reach new
      highs you’ll want an agency to have your back. One with a process
      that has proven itself over and over again.</p>
      <button className='button2 p-2 ' data-aos={ind % 2 === 0 ? 'fade-right' : 'fade-left'}>Read More</button>
        </div>
      </div>)
      }

</div>
  </div>
  </div>
    )
}
