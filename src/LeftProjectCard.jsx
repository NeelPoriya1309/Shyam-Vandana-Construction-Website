import styles from './LeftProjectCard.module.css';

function ProjectSection() {
  return (
    <div className={styles['project-card']}>
      <div className={styles['project-title']}>
        <h3>Sarangpur Hanumanji Mandir</h3>
      </div>
      <div className={styles['project-details']}>
        <div className={styles['project-image']}>
          <img src="https://media-cdn.tripadvisor.com/media/photo-p/15/54/85/bd/img-20181111-121949-472.jpg"></img>
        </div>
        <div className={styles['project-description']}>
          <ul>
            <li>
              <b>Site Name</b>: Sarangpur Hanumanji Mandir
            </li>
            <li>
              <b>Location</b>: Sarangpur
            </li>
            <li>
              <b>Area</b>: 1.5 acres
            </li>
            <li>
              <b>Project Type</b>: Mandir
            </li>
            <li>
              <b>Project Status</b>: Completed
            </li>
            <li>
              <b>Project Cost</b>: 1.5 crores
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
