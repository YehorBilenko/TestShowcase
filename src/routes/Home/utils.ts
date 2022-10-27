import gameImg1 from '_assets/images/example1.jpg';
import gameImg2 from '_assets/images/example2.jpg';
import gameImg3 from '_assets/images/example3.jpg';
import gameImg4 from '_assets/images/game_1.png';
import gameImg5 from '_assets/images/game_2.png';
import gameImg6 from '_assets/images/game_3.png';
import { TGame } from './interfaces';

export const games: TGame[] = [
  {
    id: 1,
    title: 'Hooping Heads',
    subTitle: '25m+ DOWNLOADS',
    googleStoreLink:
      'https://play.google.com/store/apps/details?id=com.lightdev.hoppingheads',
    appStoreLink:
      'https://apps.apple.com/app/hopping-heads-scream-shout/id1596314588',
    media: [gameImg1, gameImg2, gameImg3],
  },
  {
    id: 2,
    title: 'More our games',
    subTitle: '',
    googleStoreLink:
      'https://play.google.com/store/apps/dev?id=7917772865134124209',
    appStoreLink:
      'https://apps.apple.com/us/developer/yehor-bilenko/id1513825133',
    media: [gameImg4, gameImg5, gameImg6],
  }
];
