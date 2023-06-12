import foodlifyImg from '@/img/foodlify.webp';
import pzgImg from '@/img/pzg.webp';
import yobImg from '@/img/yob.webp';

const projectsArr = [
  {
    name: 'Foodlify',
    desc: 'Web application designed for browsing, bookmarking, and managing recipes effortlessly.',
    img: foodlifyImg.src,
    href: 'https://foodlify.vercel.app/'
  },

  {
    name: 'PzG',
    desc: 'Website created for my academic social campaign project, solely dedicated to provide information about it.',
    img: pzgImg.src,
    href: 'https://www.pijezglowa.pl/'
  },

  {
    name: 'YOB',
    desc: 'Landing page designed for fictional barber shop. My first personal project.',
    img: yobImg.src,
    href: 'https://wiktorjs-yob.netlify.app/'
  },
];

export default projectsArr;
