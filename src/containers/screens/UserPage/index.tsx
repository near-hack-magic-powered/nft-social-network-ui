import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { userSelector } from 'store/user';

import FollowersBlock from 'components/FollowersBlock';
import UserBio from 'components/UserBio';
import NFTListView from 'components/NFTListView';
import ScreenHeader from 'components/ScreenHeader';

import styles from './UserPage.module.scss';

const UserPage: FC = () => {
  const history = useHistory();

  const user = useSelector(userSelector);

  return (
    <div className={styles.root}>
      <ScreenHeader onBackButtonClick={() => history.goBack()} />

      <UserBio
        showSubscribe
        accId=""
        username={user.username || ''}
        bio={user.bio || ''}
        avatar={user.avatar || ''}
      />

      <div className={styles.viewControl}>
        <FollowersBlock
          className={styles.followers}
          followers={user.followers || 0}
          following={user.following || 0}
          followersLink={`#/cabinet/followers/${user.id}`}
          followingLink={`#/cabinet/followers/${user.id}`}
        />
      </div>

      {user.nfts && <NFTListView nfts={[]} showOwnerInfo />}
    </div>
  );
};

export default UserPage;
