import projectsArr from '@/store/projects';
import Project from './Project';
import classes from './Projects.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Latest Projects</h2>

      <div className={classes.projects}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          centeredSlides
          pagination={{ clickable: true, bulletClass: `swiper-pagination-bullet ${classes.pagination}` }}
          navigation
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
            pageUpDown: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
        >

          {projectsArr.map((project, i) => (
            <SwiperSlide key={i}>
              <Project
                img={project.img}
                title={project.name}
                text={project.desc}
              />
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </section>
  );
}
