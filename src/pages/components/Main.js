import styles from '../../styles/Dashboard.module.css'

import Events from './Events'
export default function Main() {

    return (

        <div className={styles.main}>

            <div>Hello, Sri</div>
            <div className={styles.section1}>
                <div style={{ fontSize: "32px", display: "inline-block" }}>Dashboard</div>

                <div className={styles.duration}>Jan 31,2023 - Fev 25,2023</div>
            </div >
            <div className={styles.empInline}>
                <div className={styles.employeeCards}>
                    <ul className={styles.list}>
                        <li style={{ marginLeft: "3vh", fontSize: "24px" }}>Employee</li>
                        <li style={{ position: "relative", left: "75vh", fontWeight: 500, fontSize: "19px", lineHeight: "19px", color: "#2E71C3" }}>{`view all >`} </li>
                    </ul>

                    <div className={styles.section2}>
                        <div className={styles.empCards}>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic} ><div className={styles.innerEP}></div></div>

                                <p className={styles.Name}>Mr.Maneesh</p>
                                <p className={styles.Role}>SSIT Cofounder</p>

                            </div>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sudheer</p>
                                <p className={styles.Role}>SSIT Cofounder</p>
                            </div>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic} ><div className={styles.innerEP}></div></div>

                                <p className={styles.Name}>Mr.Maneesh</p>
                                <p className={styles.Role}>SSIT Cofounder</p>

                            </div>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sudheer</p>
                                <p className={styles.Role}>SSIT Cofounder</p>
                            </div>

                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sriram</p>
                                <p className={styles.Role}>FullStack Developer</p>
                            </div>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sriram</p>
                                <p className={styles.Role}>FullStack Developer</p>
                            </div>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sriram</p>
                                <p className={styles.Role}>FullStack Developer</p>
                            </div>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sriram</p>
                                <p className={styles.Role}>FullStack Developer</p>
                            </div>
                            <div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sriram</p>
                                <p className={styles.Role}>FullStack Developer</p>
                            </div><div className={styles.EmpCard}>
                                <div className={styles.EmployeePic}><div className={styles.innerEP}></div></div>
                                <p className={styles.Name}>Mr.Sriram</p>
                                <p className={styles.Role}>FullStack Developer</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Events />
                <div className={styles.forEmptyInline}>
                    <div className={styles.proj}>

                        <h3>Projects</h3>
                        <p>View All <strong> {`>`}</strong></p>
                    </div>
                    <div className={styles.projInfo}>

                        <div className={styles.proGrid1}>
                            <div className={styles.Psquare}></div>
                            <span style={{ position: "absolute", marginLeft: "5px" }}>PN001</span>
                            <span style={{ position: "absolute", top: "25px", marginLeft: "5px" }}>Project Name</span>
                            <div className={styles.duration2}>Jan 31,2023 - Fev 25,2023</div>
                        </div>
                        <div className={styles.projGrid2}>
                            <span style={{ fontSize: "18px" }}>Project Data</span>
                            <div className={styles.proNGrid}>
                                <div style={{ textAlign: "center" }}>All Tasks</div>
                                <div style={{ textAlign: "center" }}>Active Tasks</div>
                                <div style={{ textAlign: "center" }}>Assignees</div>
                                <div style={{ textAlign: "center" }}>4</div>
                                <div style={{ textAlign: "center" }}>2</div>
                                <div className={styles.Assignees}>
                                    <div className={[styles.AssiCir, styles.cir1].join(" ")}></div>
                                    <div className={[styles.AssiCir, styles.cir2].join(" ")}></div>
                                    <div className={[styles.AssiCir, styles.cir3].join(" ")}></div>
                                    <div className={[styles.AssiCir, styles.cir4].join(" ")}><strong>+</strong></div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.empty}>
                    </div>
                </div>

            </div>
        </div >
    )
}