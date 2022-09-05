import * as React from 'react';
import { AppContext } from 'App';
import { ITouchHandler } from './interfaces';

const TouchHandler: React.FC<ITouchHandler> = ({
  children,
  handleOnTouchStart,
  handleOnTouchEnd,
  touchLength = 0,
}) => {
  const { toggleClicked } = React.useContext(AppContext);
  const [initialTouch, setInitialTouch] = React.useState(0);

  const onTouchStart = (event: React.TouchEvent<HTMLInputElement>) => {
    setInitialTouch(event.touches[0].clientY);
    if (handleOnTouchStart) {
      handleOnTouchStart();
    }
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLInputElement>) => {
    if (
      event.changedTouches[0].clientY - initialTouch < -touchLength ||
      event.changedTouches[0].clientY - initialTouch > touchLength
    ) {
      toggleClicked(event.changedTouches[0].clientY < initialTouch);
    }
    if (handleOnTouchEnd) {
      handleOnTouchEnd();
    }
  };
  return (
    <div
      className="touch-handler"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
};

export { TouchHandler };
