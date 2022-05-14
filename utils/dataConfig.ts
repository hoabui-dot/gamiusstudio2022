import OurCustomer1 from '../public/img/OurCustomer1.png';
import OurCustomer2 from '../public/img/OurCustomer2.png';
import OurCustomer3 from '../public/img/OurCustomer3.png';
import OurCustomer4 from '../public/img/OurCustomer4.png';
import OurCustomer5 from '../public/img/OurCustomer5.png';
import OurCustomer6 from '../public/img/OurCustomer6.png';
import work1 from '../public/img/ourWork1.png';
import work2 from '../public/img/ourWork2.png';
import work3 from '../public/img/ourWork3.png';

export const MDHeader = {
  navigation: [
    { title: 'Home', url: '/', name: 'home' },
    { title: 'Works', url: '/', name: 'works' },
    { title: 'About Us', url: '/', name: 'about' },
    { title: 'Contact Now', url: '/', name: 'contact' },
  ],
};

export const MDService = {
  title: 'Our Service',
  subTitle: 'You can find your own solution with our expertise',
  mainContent: [
    {
      imgSrc: '/img/Shooting1.png',
      imgAlt: 'gaming',
      title: 'Illustration',
      description:
        'Digital painting and illustrations for posters, advertising campaigns, magazines, book covers,...',
      url: '/',
    },
    {
      imgSrc: '/img/Shooting2.png',
      imgAlt: 'gaming',
      title: 'Shooting',
      description:
        'Concept definition, art direction, photo processing for artistic, commercial or corporate photo.',
      url: '/',
    },
    {
      imgSrc: '/img/3DModelling.png',
      imgAlt: 'gaming',
      title: '3D Modelling',
      description:
        '3D characters, eviroments, creature for games, movies and 3D printing technologies.',
      url: '/',
    },
    {
      imgSrc: '/img/Animation.png',
      imgAlt: 'gaming',
      title: 'Animation - VFX',
      description:
        'Animation and visual effects for feature films and television.',
      url: '/',
    },
  ],
};

export const OurCustomerData = [
  {
    image: OurCustomer1,
  },
  {
    image: OurCustomer2,
  },
  {
    image: OurCustomer3,
  },
  {
    image: OurCustomer4,
  },
  {
    image: OurCustomer5,
  },
  {
    image: OurCustomer6,
  },
];

export const OurWorkData = [
  {
    image: work1,
    alt: 'work1',
  },
  {
    image: work2,
    alt: 'work2',
  },
  {
    image: work3,
    alt: 'work3',
  },
];
