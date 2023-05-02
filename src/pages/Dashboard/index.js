import { useState } from 'react'

import Referrals from '../components/Recruitment/Referrals'
import Jobs from '../components/Recruitment'
import Candidates from '../components/Recruitment/Candidates'
import Employee from '../components/Organization/Employee'
import Structure from '../components/Organization/Structure'
import Report from '../components/Organization/Report'
import Settings from '../components/Organization/Settings'
import Calendar from '../components/Calendar'
import Inbox from '../components/Inbox'
import Main from '../components/Main'
// import Sidebar from '../components/Sidebar'
import Topnav from '../components/Topnav'
import styles from '../../styles/Dashboard.module.css'
import Link from 'next/link'
import Organization from '../components/Organization'

// import Inbox from '../components/Inbox'
// import Inbox from './components/Inbox'
// import Calendar from './components/Calendar'
// import Recruitment from './components/Recruitment'
// import Organization from './components/Organization'

export default function Dashboard() {
    const [componentInMain, seTcomponentInMain] = useState(<Main />)
    const [bgD, setbgD] = useState("white");
    const [bgI, setbgI] = useState("white");
    const [bgC, setbgC] = useState("white");
    const [bgR, setbgR] = useState("white");
    const [bgJ, setbgJ] = useState("white");
    const [bgO, setbgO] = useState("white");
    const [bgCa, setbgCa] = useState("white");
    const [bgRe, setbgRe] = useState("white");
    const [bgE, setbgE] = useState("white");
    const [bgS, setbgS] = useState("white");
    const [bgRep, setbgRep] = useState("white");
    const [bgSe, setbgSe] = useState("white");
    const emp = () => {
        seTcomponentInMain(<Employee />);
        // setbgO("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgR("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
        setbgE("rgba(0, 117, 255, 0.25)");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");
    }

    const stru = () => {
        seTcomponentInMain(<Structure />);
        // setbgO("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgR("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
        setbgE("white");
        setbgS("rgba(0, 117, 255, 0.25)");
        setbgRep("white");
        setbgSe("white");
    }

    const rep = () => {
        seTcomponentInMain(<Report />);
        // setbgO("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgR("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
        setbgE("white");
        setbgS("white");
        setbgRep("rgba(0, 117, 255, 0.25)");
        setbgSe("white");
    }

    const setti = () => {
        seTcomponentInMain(<Settings />);
        // setbgO("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgR("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("rgba(0, 117, 255, 0.25)");
    }

    const refer = () => {
        seTcomponentInMain(<Referrals />);
        setbgRe("rgba(0, 117, 255, 0.25)");
        setbgJ("white");
        setbgO("white");
        // setbgR("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgCa("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");
    }
    const candi = () => {
        seTcomponentInMain(<Candidates />);
        // console.log("hii candi")
        setbgCa("rgba(0, 117, 255, 0.25)");
        setbgO("white");
        // setbgR("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgJ("white");
        setbgRe("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");

    }
    const jobs = () => {
        seTcomponentInMain(<Jobs />);
        setbgO("white");
        // setbgR("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgJ("rgba(0, 117, 255, 0.25)");
        setbgRe("white");
        setbgCa("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");
    }
    const recruit = () => {
        // seTcomponentInMain(<Employee />);
        setbgO("white");
        setbgR("rgba(0, 117, 255, 0.25)");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
    }
    const inbox = () => {
        seTcomponentInMain(<Inbox />);
        setbgO("white");
        setbgC("white");
        setbgD("white");
        setbgI("rgba(0, 117, 255, 0.25)");
        setbgR("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");

        // console.log("hello")
    }
    const calendar = () => {
        seTcomponentInMain(<Calendar />);
        setbgC("rgba(0, 117, 255, 0.25)");
        setbgO("white");
        setbgD("white");
        setbgI("white");
        setbgR("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");
    }

    const main = () => {
        seTcomponentInMain(<Main />)
        setbgO("white");
        setbgC("white");
        setbgD("rgba(0, 117, 255, 0.25)");
        setbgI("white");
        setbgR("white");
        setbgJ("white");
        setbgRe("white");
        setbgCa("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");
    }

    const Orginvi = () => {
        // document.getElementsByClassName(${`kin`}).value = "block";
    }
    const [RecInvi, setrecInvi] = useState("none");
    const [orgInvi, setorgInvi] = useState("none");
    const [uparrow, setuparrow] = useState('../images/down-arrow.png');
    const [uparrow2, setuparrow2] = useState('../images/down-arrow.png')
    // var x = document.getElementById("arrow");
    // console.log(x.value)

    const recInvi = () => {
        // console.log("hello")
        if (RecInvi == "none") {
            setrecInvi("block");
            setuparrow('../images/uparrow.png');
        }
        else {
            setrecInvi("none");
            setuparrow('../images/down-arrow.png');
        }
    }

    const orgNi = () => {
        // const xy = document.getElementsByClassName('orgn');
        // xy.value = "block";
        setbgO("rgba(0, 117, 255, 0.25)");
        setbgR("white");
        setbgC("white");
        setbgD("white");
        setbgI("white");
        setbgJ("white");
        setbgCa("white");
        setbgRe("white");
        setbgE("white");
        setbgS("white");
        setbgRep("white");
        setbgSe("white");
        if (orgInvi == "none") {
            setorgInvi("block");
            setuparrow2('../images/uparrow.png');
        }
        else {
            setorgInvi("none");
            setuparrow2('../images/down-arrow.png');
        }

    }
    // const [uparrow, setuparrow] = useState('../images/down-arrow.png');


    return (
        <>

            <div className={styles.oceanBlue}>
                <div className={styles.parentContainer}>
                    <div className={styles.sideBar} >
                        <div>
                            <img src='../images/ssitLogo.png' alt="SSIT Logo" className={styles.sideLogos} />
                        </div>
                        <div style={{ backgroundColor: `${bgD}` }} onClick={main} className={[styles.linkBorder, styles.linkHover].join(" ")}>
                            <img src='../images/Dashboard.png' className={[styles.linkHover, styles.sideLogos].join(" ")} alt="Dashboard Logo" />
                            <a>&nbsp;&nbsp;<span className={styles.font} >Dashboard</span></a>
                        </div>
                        <div onClick={inbox} style={{ backgroundColor: `${bgI}` }} className={[styles.linkBorder, styles.linkHover].join(" ")}>
                            <img src='../images/Inbox.png' className={[styles.linkHover, styles.sideLogos].join(" ")} alt="Inbox Logo" />
                            <a>&nbsp;&nbsp;<span className={styles.font}>Inbox</span></a>
                        </div>
                        <div onClick={calendar} style={{ backgroundColor: `${bgC}` }} className={[styles.linkBorder, styles.linkHover].join(" ")}>
                            <img src='../images/Calendar.png' className={[styles.linkHover, styles.sideLogos].join(" ")} alt="Calendar Logo" />
                            <a>&nbsp;&nbsp;<span className={styles.font}>Calendar</span></a>
                        </div>
                        <div>
                            <div style={{ display: "block", bottom: "7px", right: "4px", position: "relative" }} >
                                <span onClick={recruit} style={{ backgroundColor: `${bgR}`, display: "inline-block", borderRadius: "10px" }}>
                                    <span onClick={recInvi} className={[styles.linkBorder, styles.rec].join(" ")}>
                                        <img src='../images/Recruitment.png' className={[styles.linkHover, styles.sideLogos]} alt="Recruitment Logo" style={{ position: "relative", top: "3px" }} />
                                        <div style={{ display: "inline-block", marginLeft: "-5.6px", position: "relative" }} className={styles.linkHover}><a>&nbsp;&nbsp;Recruitment<img src={uparrow} style={{ position: 'relative', left: '11px', top: '2.9px' }} /></a></div>
                                    </span>
                                </span>
                                <div className={styles.OrgInvisi} style={{}}>
                                    <a style={{ display: `${RecInvi}`, backgroundColor: `${bgJ}`, paddingLeft: "13px" }} onClick={jobs} className={[styles.linkBorder, styles.linkHover].join(" ")}><img src="../images/suitcase.png" className={styles.linkHover}></img>Jobs</a>
                                    <a style={{ display: `${RecInvi}`, backgroundColor: `${bgCa}`, paddingLeft: "13px" }} onClick={candi} className={[styles.linkBorder, styles.linkHover].join(" ")}><img src="../images/group.png" className={styles.linkHover}></img>Candidates</a>
                                    <a style={{ display: `${RecInvi}`, backgroundColor: `${bgRe}`, paddingLeft: "13px" }} onClick={refer} className={[styles.linkBorder, styles.linkHover].join(" ")}><img src="../images/traingle.png" className={styles.linkHover} style={{ position: "relative", left: "-12px" }}></img><span style={{ position: "relative", top: "-5px", right: "6px" }}>Referrals</span></a>

                                </div>
                            </div>
                        </div>
                        <div className={styles.Org} style={{ marginLeft: "0px" }} >
                            <span onClick={orgNi} style={{ backgroundColor: `${bgO}`, marginLeft: "0px", paddingRight: "70px", borderRadius: "10px", display: "inline-block", paddingBottom: " 5px", }}>
                                <img src='../images/Organization.png' className={[styles.linkHover, styles.org].join(" ")} alt="Organization Logo" />
                                <a>&nbsp;<span className={[styles.font, styles.linkHover].join(" ")} style={{ position: "relative", left: "8px" }}>Organization<img src={uparrow2} style={{ position: 'relative', left: '8px', top: '2.9px' }} /></span></a>
                            </span>
                            <div className={styles.OrgInvisi} style={{ marginLeft: "8px" }}>
                                <a style={{ display: `${orgInvi}`, backgroundColor: `${bgE}`, paddingLeft: "11px" }} onClick={emp} className={[styles.linkBorder2, styles.linkHover].join(" ")}><img src="../images/owner.png" className={styles.linkHover} />Employee</a>
                                <a style={{ display: `${orgInvi}`, backgroundColor: `${bgS}`, paddingLeft: "11px" }} onClick={stru} className={[styles.linkBorder2, styles.linkHover].join(" ")}><img src="../images/structure.png" className={styles.linkHover}></img>Structure</a>
                                <a style={{ display: `${orgInvi}`, backgroundColor: `${bgRep}`, paddingLeft: "11px" }} onClick={rep} className={[styles.linkBorder2, styles.linkHover].join(" ")}><img src="../images/file.png" className={styles.linkHover} style={{ position: "relative" }}></img><span style={{ position: "relative" }}>Report</span></a>
                                <a style={{ display: `${orgInvi}`, backgroundColor: `${bgSe}`, paddingLeft: "11px" }} onClick={setti} className={[styles.linkBorder2, styles.linkHover].join(" ")}><img src="../images/settings.png" className={styles.linkHover}></img>Settings</a>
                            </div>
                        </div >
                        <img src="../images/cuate.png" alt="cuate Logo" className={styles.cuate} />

                        <button className={[styles.HS, styles.linkHover].join(" ")}>Help & support</button>
                        <div className={styles.logout}>
                            <img src="../images/logout.png" alt="Logout logo" style={{ cursor: "pointer" }} />&nbsp;&nbsp;<span className={[styles.font, styles.linkHover].join(" ")}>Logout</span>
                        </div>
                    </div >

                    <Topnav />
                    {componentInMain}
                </div >
            </div >
        </>
    )
}

