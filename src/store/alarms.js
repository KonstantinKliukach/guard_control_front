import { createStore } from 'effector';

const defaultState = [
  /* {
    id: 1,
    user: {
      id: 9,
      firstName: 'Diman',
      lastName: 'Petrov',
      email: 'petrov@gmail.com',
      tel: '+79176450029',
      active: false,
      status: 0,
      role: 31,
      img: '9_img.jpg',
      pasImg1: '9_pasImg1.jpg',
      pasImg2: '9_pasImg2.png',
      password: '$2a$10$yfGfBQDuXl024AyOGZ3NI.EffNvahUS4WFDWatZfh.rccakGjMQwy',
      notes: '',
      createdAt: '2019-08-27T15:26:58.700Z',
      updatedAt: '2019-08-27T15:26:58.764Z',
    },
    lat: 59.95,
    lon: 30.33,
    chops:
    [
      {
        name: 'Бэтмэн',
        phone: '12245',
        notes: 'Для вызова включите бэт-сигнал',
      },
      {
        name: 'ООО Витязь',
        phone: '12245',
        notes: '33 богатыря',
      },
      {
        name: 'Бэтмэн',
        phone: '12245',
        notes: 'Для вызова включите бэт-сигнал',
      },
      {
        name: 'ООО Витязь',
        phone: '12245',
        notes: '33 богатыря',
      },
      {
        name: 'Бэтмэн',
        phone: '12245',
        notes: 'Для вызова включите бэт-сигнал',
      },
      {
        name: 'ООО Витязь',
        phone: '12245',
        notes: '33 богатыря',
      },
      {
        name: 'Бэтмэн',
        phone: '12245',
        notes: 'Для вызова включите бэт-сигнал',
      },
      {
        name: 'ООО Витязь',
        phone: '12245',
        notes: '33 богатыря',
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 11,
      firstName: 'Ivan',
      lastName: 'Ivanov',
      email: 'petrov@gmail.com',
      tel: '+79176450029',
      active: false,
      status: 1,
      role: 31,
      img: '11_img.jpg',
      pasImg1: '11_pasImg1.jpg',
      pasImg2: '11_pasImg2.png',
      password: '$2a$10$rWw2ImlTWeuq2MKnlnKmvOVX/XHgTGRq68V6pCJ27kza/kq/jAHva',
      notes: '',
      createdAt: '2019-08-28T09:35:02.931Z',
      updatedAt: '2019-08-28T09:35:02.942Z',
    },
    lat: 44.61,
    lon: 33.52,
    chops:
    [
      {
        name: 'ЧП Паук',
        phone: '12245',
        notes: 'Пароль: "Питер Паркер"',
      },
      {
        name: 'Злые дяди',
        phone: '12245',
        notes: 'Реально, злые',
      },
    ],
  },
  {
    id: 3,
    user: {
      id: 12,
      firstName: 'Vasya',
      lastName: 'Vasin',
      email: 'vasin@gmail.com',
      tel: '+79176451166',
      active: false,
      status: 2,
      role: 31,
      img: '11_img.jpg',
      pasImg1: '11_pasImg1.jpg',
      pasImg2: '11_pasImg2.png',
      password: '$2a$10$rWw2ImlTWeuq2MKnlnKmvOVX/XHgTGRq68V6pCJ27kza/kq/jAHva',
      notes: '',
      createdAt: '2019-08-28T09:35:02.931Z',
      updatedAt: '2019-08-28T09:35:02.942Z',
    },
    lat: 55.75,
    lon: 37.61,
    chops:
    [
      {
        name: 'ЧП Паук',
        phone: '12245',
        notes: 'Пароль: "Питер Паркер"',
      },
      {
        name: 'Злые дяди',
        phone: '12245',
        notes: 'Реально, злые',
      },
    ],
  }, */
];

const alarms = createStore(defaultState);

export default alarms;
