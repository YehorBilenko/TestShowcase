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
        <a
          href="https://play.google.com/store/apps/dev?id=7917772865134124209"
          target="_blank"
          rel="noreferrer"
        >
          <AndroidIcon className="icon" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://apps.apple.com/us/developer/yehor-bilenko/id1513825133"
          target="_blank"
          rel="noreferrer"
        >
          <AppleIcon className="icon" />
        </a>
      </div>
    </li>
    <li className="li line" />
    <li className="li social-group">
      <div className="social__item">
        <a href="mailto:support@lightdev.io" rel="noreferrer">
          <EmailIcon className="icon" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://www.linkedin.com/company/lightdev"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon className="icon" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://www.tiktok.com/@lightdev_games"
          target="_blank"
          rel="noreferrer"
        >
          <TiktokIcon className="icon" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://assetstore.unity.com/publishers/31610"
          target="_blank"
          rel="noreferrer"
        >
          <UnityIcon className="icon" />
        </a>
      </div>
    </li>
  </ul>
);

export { Social };
