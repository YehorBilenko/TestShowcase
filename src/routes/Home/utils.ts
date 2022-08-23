import gameImg1 from '_assets/images/example1.jpg';
import gameImg2 from '_assets/images/example2.jpg';
import gameImg3 from '_assets/images/example3.jpg';
import { TGame } from './interfaces';

export const games: TGame[] = [
  {
    id: 1,
    title: 'Hooping Heads',
    subTitle: '22m+ DOWNLOADS',
    googleStoreLink:
      'https://play.google.com/store/apps/details?id=com.lightdev.hoppingheads',
    appStoreLink:
      'https://apps.apple.com/app/hopping-heads-scream-shout/id1596314588',
    media: [gameImg1, gameImg2, gameImg3],
  },
];
