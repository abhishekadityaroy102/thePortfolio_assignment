import React, { useContext, useState, useEffect, useRef } from 'react';
import Styles from "./Testimonial.module.css";
import { DataProvider } from '../ContextApi/Contextapi';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {
  const { state } = useContext(DataProvider);
  const testimonialArr = state?.data?.testimonials;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const slideInterval = useRef(null); // useRef for interval cleanup

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialArr.length);
    }, 5000); // Adjust interval duration (milliseconds)

    return () => clearInterval(slideInterval.current); // Cleanup on unmount
  }, [testimonialArr.length]); // Re-run useEffect on testimonial data change

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {testimonialArr.length > 0 ? (
        <div className={Styles.maindivT}>
          <p className={Styles.headline}>Testimonials</p>
          <div className={Styles.testimonialSlider} ref={slideRef}>
            {testimonialArr.map((el, index) => (
              <SingleTestimonial key={el.id} data={el} isActive={index === currentSlide} />
            ))}
          </div>
          <div className={Styles.sliderControls}>
            {testimonialArr.map((el, index) => (
              <button key={el.id} className={index === currentSlide ? Styles.activebtn : Styles.inactivebtn} onClick={() => handleSlideChange(index)}>
                
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Testimonial;

