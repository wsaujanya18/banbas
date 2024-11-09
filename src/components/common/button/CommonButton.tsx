import Link from 'next/link';
import styles from './CommonButton.module.css';

type CommonButtonProps = {
  padding: string;
  type: 'normal' | 'whitebg' | 'green' | 'banbas';
  content: string;
  url: string;
};

const CommonButton = ({ padding, content, type, url }: CommonButtonProps) => {
  const isInternalLink = url.startsWith('/');

  const handleClick = () => {
    if (!isInternalLink) {
      // window.location.href = url;
      const newTab = window.open();
      if (newTab) {
        newTab.opener = null;
        newTab.location.href = url;
      }
    }
  };

  let buttonStyle = styles.basic;
  if (type === 'normal') {
    buttonStyle = styles.normal;
  } else if (type === 'whitebg') {
    buttonStyle = styles.whiteBg;
  } else if (type === 'green') {
    buttonStyle = styles.greenButton;
  } else if (type === 'banbas') {
    buttonStyle = styles.banbasButton;
  }

  return isInternalLink ? (
    <Link href={url} legacyBehavior>
      <a className={`${styles.button} ${buttonStyle}`} style={{ padding }}>
        {content}
      </a>
    </Link>
  ) : (
    <button
      className={`${styles.button} ${buttonStyle}`}
      style={{ padding }}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default CommonButton;
