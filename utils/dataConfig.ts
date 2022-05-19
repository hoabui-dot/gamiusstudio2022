import OurCustomer1 from '../public/img/OurCustomer1.png';
import OurCustomer2 from '../public/img/OurCustomer2.png';
import OurCustomer3 from '../public/img/OurCustomer3.png';
import OurCustomer4 from '../public/img/OurCustomer4.png';
import OurCustomer5 from '../public/img/OurCustomer5.png';
import OurCustomer6 from '../public/img/OurCustomer6.png';
import work1 from '../public/img/ourWork1.png';
import work2 from '../public/img/ourWork2.png';
import work3 from '../public/img/ourWork3.png';
import calender from '../public/img/calendar.png';
import location from '../public/img/location.png';

export const MDHeader = {
  navigation: [
    { title: 'Home', url: '/', name: 'home' },
    { title: 'Works', url: '/work', name: 'works' },
    { title: 'About Us', url: '/about', name: 'about' },
    { title: 'Contact Now', url: '/contact', name: 'contact' },
  ],
};

export const MDFooter = {
  mainInfo: {
    companyName: 'CÔNG TY TNHH Studio',
    location: '523 Tô Hiến Thành, P.14, Q.10, TP. HCM',
    phone: '1900-1234',
    openingHours: '8:30 - 20:30 (T2 đến T7)',
  },
  listContents: [
    {
      title: 'about us',
      content: [
        {
          label: 'Introduce',
          url: '/',
        },
        {
          label: 'Contact us',
          url: '/',
        },
      ],
    },
    {
      title: 'works',
      content: [
        {
          label: 'Design 2D',
          url: '/',
        },
        {
          label: '3d Modeling',
          url: '/',
        },
        {
          label: 'Videos/VFX',
          url: '/',
        },
      ],
    },
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

export const HomeBannerData = [
  {
    title: 'design game',
    image: '/img/BannerImg1.png',
    subImage: 'Product',
    background: '/img/BannerBackground1.png',
    subBackground: 'Background',
  },
  {
    title: 'create character',
    image: '/img/BannerImg2.png',
    subImage: 'Product',
    background: '/img/BannerBackground2.png',
    subBackground: 'Background',
  },
  {
    title: 'create animation/vfx',
    image: '/img/BannerImg3.png',
    subImage: 'Product',
    background: '/img/BannerBackground3.png',
    subBackground: 'Background',
  },
];

export const WorkBannerData = [
  { title: 'illustration' },
  { title: 'shooting' },
  { title: 'create 3d modeling' },
  { title: 'animation/vfx' },
  { title: 'ui/ux' },
];

export const ApproachData = [
  {
    title: 'Through line',
    subTitle:
      'All ideas have narratives to tell. It is core to build depth, dimension and distinctiveness.',
  },
  {
    title: 'Strong connection',
    subTitle:
      'We combine the art and long-term goal to create a seamless blend of capabilities to solve challenges.',
  },
  {
    title: 'Holistic perpective',
    subTitle:
      'Various thoughts from culture to individual values are always taken into consideration to inspire emotion and innovation.',
  },
  {
    title: 'Simple but significant',
    subTitle:
      'All elements are carefully chosen to fully deliver meaningful message in a visually comfortable way.',
  },
  {
    title: 'Impactful performance',
    subTitle:
      'We transform shining piece of creativity into effectively communication which encourages customer’s action.',
  },
  {
    title: 'High versatility',
    subTitle:
      'We have a wide variety of skills and extensive knowledge to be flexible and adaptable.',
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

export const CardsData = [
  {
    title: '3D Modeling',
    subTitle: '01. 3D',
    href: '/error',
    content: [
      {
        src: calender,
        alt: 'calender',
        content: 'Parttime',
      },
      {
        src: location,
        alt: 'location',
        content: 'Hồ Chí Minh',
      },
    ],
  },
  {
    title: '3D Modeling',
    subTitle: '01. 3D',
    href: '/error',
    content: [
      {
        src: calender,
        alt: 'calender',
        content: 'Parttime',
      },
      {
        src: location,
        alt: 'location',
        content: 'Hồ Chí Minh',
      },
    ],
  },
  {
    title: '3D Modeling',
    subTitle: '01. 3D',
    href: '/error',
    content: [
      {
        src: calender,
        alt: 'calender',
        content: 'Parttime',
      },
      {
        src: location,
        alt: 'location',
        content: 'Hồ Chí Minh',
      },
    ],
  },
];

export const WorkingProcessData = [
  {
    image: '/img/WorkingProcess1.png',
    subImage: 'Working Process',
    title: 'Diagnose deeply ',
    subTitle:
      'From your desires, we tease out questions, analyse all challenges and insights to find power.',
  },
  {
    image: '/img/WorkingProcess2.png',
    subImage: 'Working Process',
    title: 'Build the meaning',
    subTitle:
      'All designs deliver deeply meaningful messages as its own value to communicate more effectively.',
  },
  {
    image: '/img/WorkingProcess3.png',
    subImage: 'Working Process',
    title: ' Drive memory',
    subTitle:
      "Creative designs with iconic identity, sensorial expression attract attention and win customer's headed",
  },
  {
    image: '/img/WorkingProcess4.png',
    subImage: 'Working Process',
    title: 'Fine-tune and complete',
    subTitle:
      'A finished product always requires a meticulousness in every small detail.',
  },
  {
    image: '/img/WorkingProcess5.png',
    subImage: 'Working Process',
    title: 'Aftercare',
    subTitle:
      'We provides support throughout and after each project for your greatest satisfaction and experience.',
  },
];
