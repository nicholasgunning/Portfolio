import styles from "../../stylesheets/informedGlobe.module.css";

function TeamMember({ image, name, description }) {
  return (
    <div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.flexContent}>
        <div className={styles.circleFrame}>
          <img className={styles.circleImage} src={image} alt={name} />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>  
  );
}

export default TeamMember;
