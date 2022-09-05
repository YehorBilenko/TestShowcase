interface ITouchHandler {
  children: any;
  handleOnTouchStart?: () => void;
  handleOnTouchEnd?: () => void;
  touchLength: number;
}

export type { ITouchHandler };
