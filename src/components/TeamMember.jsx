import styles from "./TeamMember.module.scss";

function TeamMember({ image, name, description }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.flexContent}>
        <div className={styles.circleFrame}>
          <img className={styles.circleImage} src={image} alt={name} />
        </div>
        <p className={styles.teamMemberDescription}>{description}</p>
      </div>
    </div>
  );
}

export default TeamMember;
