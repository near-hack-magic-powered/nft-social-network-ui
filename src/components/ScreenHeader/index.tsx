import React, { FC } from 'react';
import classNames from 'classnames';

import Button from 'components/ui-kit/Button';
import Typography from 'components/ui-kit/Typography';

import { ReactComponent as KeyboardArrowIcon } from 'assets/icons/icon-arrow-left.svg';

import styles from './ScreenHeader.module.scss';

const ScreenHeader: FC<ScreenHeaderProps> = ({
  right,
  title,
  subtitle,
  onBackButtonClick = null,
  className,
}) => {
  return (
    <header className={classNames(styles.header, className)}>
      {onBackButtonClick && (
        <div className={styles.headerLeft}>
          <Button variant="text" type="button" onClick={onBackButtonClick}>
            <KeyboardArrowIcon
              width={18}
              height={18}
              style={{ color: 'transparent' }}
            />
          </Button>
        </div>
      )}
      <div
        className={classNames(styles.headerCenter, {
          [styles.headerCenter_align_left]: !onBackButtonClick,
        })}
      >
        {title && <Typography variant="title7">{title}</Typography>}
        {subtitle && <Typography variant="subtitle4">{subtitle}</Typography>}
      </div>
      <div className={styles.headerRight}>{right}</div>
    </header>
  );
};

type ScreenHeaderProps = {
  right?: React.ReactNode;
  title?: string;
  subtitle?: string;
  onBackButtonClick?: () => void;
  className?: string;
};

export default ScreenHeader;
