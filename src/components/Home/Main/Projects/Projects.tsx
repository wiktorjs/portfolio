import projectsArr from '@/store/projects';
import Project from './Project';
import classes from './Projects.module.scss';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef } from 'react';
import Background from '@/components/UI/Background/Background';

export default function Projects() {
  const swiperRef = useRef<SwiperClass>();

  return (
    <section id="projects">
      <Background />
      <h2>My Latest Projects</h2>

      <div className={classes.projects}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
          centeredSlides
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${classes.pagination}`,
          }}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          lazyPreloadPrevNext={1}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
            pageUpDown: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          a11y={{ enabled: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {projectsArr.map((project, i) => (
            <SwiperSlide key={i}>
              <Project
                img={project.img}
                title={project.name}
                text={project.desc}
                href={project.href}
              />
            </SwiperSlide>
          ))}

          <CaretLeft
            onClick={() => swiperRef.current?.slidePrev()}
            weight="bold"
            className={classes.icon}
          />
          <CaretRight
            onClick={() => swiperRef.current?.slideNext()}
            weight="bold"
            className={classes.icon}
          />
        </Swiper>
      </div>
    </section>
  );
}
