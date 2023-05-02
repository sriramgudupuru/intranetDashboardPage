import styles from '../../styles/Dashboard.module.css'
export default function Events() {
    return (
        <div className={styles.Events}>
            <div style={{ marginTop: "10px" }}>
                <h3 style={{ display: "inline-block", fontWeight: 600, marginLeft: "10px" }}>Events</h3>
                <span style={{ fontWeight: 500, color: "#2E71C3", left: "26vh", fontSize: "16px", lineHeight: "19px", position: "relative", }}>View All <strong>{`>`}</strong>  </span>
            </div>
            <div className={styles.EventsGrid}>
                <div className={`${styles.schedule} ${styles.schedule1}`}></div>
                <div className={styles.posRel}>
                    <h4>Employee meeting for new joinings </h4>
                    <h5>Today | 9:00 PM</h5>
                </div>
                <div className={`${styles.schedule} ${styles.schedule2}`}></div>
                <div className={styles.posRel}>
                    <h4>Tina's Birthday</h4>
                    <h5>Today | 7:00 PM</h5>
                </div>
                <div className={`${styles.schedule} ${styles.schedule3}`}></div>
                <div className={styles.posRel}>
                    <h4>Project meet</h4>
                    <h5>Today | 4:00 PM</h5>
                </div>
            </div>
        </div>
    )
}