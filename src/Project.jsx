import React from 'react';
import styles from './Project.module.css';
import LeftProjectCard from './LeftProjectCard';
import RightProjectCard from './RightProjectCard';

const Project = () => {
  let projectCards = (
    <>
      <LeftProjectCard />
      <RightProjectCard />
      <LeftProjectCard />
      <RightProjectCard />
    </>
  );

  if (screen.width < 1500) {
    projectCards = (
      <>
        <LeftProjectCard />
        <LeftProjectCard />
        <LeftProjectCard />
        <LeftProjectCard />
      </>
    );
  }
  return (
    <section
      id="project"
      style={{ backgroundColor: 'rgba(255, 220, 179, 0.2)' }}
      className={styles['projects']}
    >
      <div className={styles['title']}>
        <h2>Recent Projects</h2>
        <div className={styles['bar']}></div>
      </div>
      {projectCards}
    </section>
  );
};

export default Project;
