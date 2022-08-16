type TGame = {
  id: number;
  title: string;
  subTitle: string;
  googleStoreLink: string;
  appStoreLink: string;
  media: string[];
};

interface ISlider {
  items: TGame[];
}

interface ISlide extends TGame {}

interface IPreviewPhones {
  links: ISlide['media'];
}

export type { TGame, ISlider, ISlide, IPreviewPhones };
