import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Mary Swan</h3>
                            <span>Revcity, USA</span>
                        </div>
                    </div>
                    <p> "Graduating from Revcity has been the most transformative experience
                        of my life. The comprehensive and challenging curriculum pushed me to new
                        academic heights, while the dedicated faculty provided unwavering support
                        and mentorship. The vibrant campus community, diverse student body, and
                        numerous extracurricular opportunities allowed me to grow personally and
                        professionally. From internships and research projects to study abroad
                        programs, Revcity equipped me with the skills, knowledge,
                        and confidence to excel in my career and make a meaningful impact in my field
                        I am proud to be an alum and grateful for the lifelong connections and
                        experiences I gained. Revcity truly set the foundation
                        for my future success." </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Joe Johnson</h3>
                            <span>Revcity, USA</span>
                        </div>
                    </div>
                    <p> "I am immensely grateful for my time at Revcity.
                        The comprehensive and challenging academic program equipped
                        me with the knowledge and skills I needed to excel in my career.
                        The dedicated faculty were not only experts in their fields but
                        also mentors who genuinely cared about my personal and professional
                        growth. The diverse and inclusive campus community enriched my
                        experience, allowing me to form lifelong friendships and gain
                        a global perspective. Thanks to the opportunities provided, such
                        as internships, research projects, and extracurricular activities,
                        I graduated feeling confident and prepared to make a positive 
                        impact in the world. I couldn't have asked for a better foundation
                        for my future." </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Grace La'Belle</h3>
                            <span>Revcity, USA</span>
                        </div>
                    </div>
                    <p> "As a recent graduate of Revcity, I can confidently
                        say that my time here has been truly transformative.
                        The comprehensive curriculum, combined with hands-on learning
                        opportunities and the unwavering support from the faculty,
                        has equipped me with the knowledge and skills needed to excel
                        in my field. The diverse and inclusive community fostered 
                        a rich learning environment where I could collaborate with
                        peers from all over the world, broadening my perspectives
                        and enhancing my educational experience. I am grateful for
                        the invaluable experiences and lifelong connections
                        I have made, which have prepared me not only for a successful
                        career but also for a lifetime of growth and learning.
                        Revcity has truly set the foundation for my future,
                        and I am excited to embark on this new chapter with confidence
                        and enthusiasm." </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Harry Smith</h3>
                            <span>Revcity, USA</span>
                        </div>
                    </div>
                    <p> "Attending Revcity was a life-changing experience
                        that prepared me for success both professionally and personally.
                        The comprehensive curriculum, coupled with hands-on learning
                        opportunities, allowed me to develop a deep understanding of my field.
                        The professors are not only experts in their areas but also mentors
                        who genuinely care about student growth. The diverse and inclusive
                        campus community enriched my perspective and forged lifelong
                        friendships. Thanks to the support and resources provided by
                        Revcity, I graduated confident and ready to tackle
                        the challenges of my career. I am proud to be an alumnus
                        and highly recommend this institution to anyone seeking a
                        transformative education." </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
