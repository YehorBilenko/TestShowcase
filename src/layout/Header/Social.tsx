import './Social.scss';
import * as React from 'react';
import { ReactComponent as AppleIcon } from '_assets/images/icons/apple.svg';
import { ReactComponent as EmailIcon } from '_assets/images/icons/email.svg';
import { ReactComponent as UnityIcon } from '_assets/images/icons/unity.svg';
import { ReactComponent as TiktokIcon } from '_assets/images/icons/tik-tok.svg';
import { ReactComponent as AndroidIcon } from '_assets/images/icons/android.svg';
import { ReactComponent as LinkedinIcon } from '_assets/images/icons/linkedin.svg';

const Social: React.FC = () => (
  <ul className="social">
    <li className="social__item">
      <AndroidIcon className="icon" />
    </li>
    <li className="social__item">
      <AppleIcon className="icon" />
    </li>
    <li className="social__item">
      <EmailIcon className="icon" />
    </li>
    <li className="social__item">
      <LinkedinIcon className="icon" />
    </li>
    <li className="social__item">
      <TiktokIcon className="icon" />
    </li>
    <li className="social__item">
      <UnityIcon className="icon" />
    </li>
  </ul>
);

export { Social };
