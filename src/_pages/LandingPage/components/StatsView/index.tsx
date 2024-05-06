import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '../../../../components/other/Spacer';
import { useAgile } from '@agile-ts/react';
import core from '../../../../core';
import StatBadge from './components/StatBadge';
import { useWindowSize } from '../../../../hooks/useWindowSize';

const StatsView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  const { windowHeight } = useWindowSize();

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <h3 className={styles.Tagline}>Always Open Source.</h3>
          <h1 className={styles.Title}>Trusted by GitHub community</h1>
          <Spacer height={20} />
        </div>
        <Spacer height={windowHeight > 768 ? 60 : 20} />
        <div className={styles.BadgesContainer}>
          <StatBadge
            icon={'star'}
            number="100"
            text={'Stars'}
            to={`${siteConfig.customFields.githubUrl}/stargazers`}
            className={styles.Badge}
          />
          <StatBadge
            icon={'gitMerge'}
            number="100"
            text={'Forks'}
            to={`${siteConfig.customFields.githubUrl}/network/members`}
            className={styles.Badge}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsView;
