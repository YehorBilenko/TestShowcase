import gameImg4 from '_assets/images/game_1.png';
import gameImg5 from '_assets/images/game_2.png';
import gameImg6 from '_assets/images/game_3.png';
import gameImg1 from '_assets/images/example1.jpg';
import gameImg2 from '_assets/images/example2.jpg';
import gameImg3 from '_assets/images/example3.jpg';
import gameImg7 from '_assets/images/example4.png';
import gameImg8 from '_assets/images/example5.png';
import gameImg9 from '_assets/images/example6.png';
import { TGame } from './interfaces';

export const games: TGame[] = [
  {
    id: 1,
    title: 'Hooping Heads',
    subTitle: '43m+ DOWNLOADS',
    googleStoreLink:
      'https://play.google.com/store/apps/details?id=com.lightdev.hoppingheads',
    appStoreLink:
      'https://apps.apple.com/app/hopping-heads-scream-shout/id1596314588',
    media: [gameImg1, gameImg2, gameImg3],
  },
  {
    id: 2,
    title: 'Weapon Survivor',
    subTitle: '2m+ DOWNLOADS',
    googleStoreLink:
      'https://play.google.com/store/apps/details?id=com.lightdev.weaponsurvivor',
    appStoreLink:
      'https://apps.apple.com/us/app/weapon-survivor/id6452628415',
    media: [gameImg7, gameImg8, gameImg9],
  },
  {
    id: 3,
    title: 'More our games',
    subTitle: '',
    googleStoreLink:
      'https://play.google.com/store/apps/dev?id=7917772865134124209',
    appStoreLink:
      'https://apps.apple.com/us/developer/yehor-bilenko/id1513825133',
    media: [gameImg6, gameImg4, gameImg5],
  }
];
