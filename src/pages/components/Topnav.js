import styles from '../../styles/Dashboard.module.css'

export default function Topnav() {
    return (
        <>
            <div className={styles.topNav}>
                <input type="text" className={styles.search} placeholder='Search' />
                <img src="../../images/bell.png" alt="Notifications" className={styles.bell} />
                <div className={styles.profile}>
                    <div className={styles.ProfilePhoto}></div>
                    <span style={{ fontSize: '1.2rem', marginLeft: '-23px' }}>Jhon Harper</span>
                    <span style={{ fontSize: "22px", marginTop: "-10px", marginLeft: "-20px" }}> &#8964;</span>
                </div>
            </div>
        </>
    )
}