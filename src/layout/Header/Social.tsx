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
    <li className="li social-group">
      <div className="social__item">
        <AndroidIcon className="icon" />
      </div>
      <div className="social__item">
        <AppleIcon className="icon" />
      </div>
    </li>
    <li className="li line" />
    <li className="li social-group">
      <div className="social__item">
        <EmailIcon className="icon" />
      </div>
      <div className="social__item">
        <LinkedinIcon className="icon" />
      </div>
      <div className="social__item">
        <TiktokIcon className="icon" />
      </div>
      <div className="social__item">
        <UnityIcon className="icon" />
      </div>
    </li>
  </ul>
);

export { Social };
