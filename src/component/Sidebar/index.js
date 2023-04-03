import { faBehance, faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCalendarDay, faCalendarDays, faFileLines, faFolder, faHome, faPeopleGroup, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Sidebar.css"

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const [modal, setModal] = useState(false)
    

    return ( 
        <div className="sidebar">
            <button onClick={() => setModal(true)} className="sidebar__modal" >Show modal</button>
            <FontAwesomeIcon className="sidebar__navigate" onClick={() => setSidebar(true)}  icon={faBars} />

            {/* nav */}
            { sidebar &&
                <div className="sidebar__navigation">
                    <div>
                        <div className="sidebar__head">
                            <img className="sidebar__head-logo" src="https://react-vite-projects-12-sidebar.netlify.app/assets/logo-ddc33e51.svg" />
                            <FontAwesomeIcon onClick={() => setSidebar(false)} className="sidebar__head-icon" icon={faXmark} />
                        </div>
                        <ul className="sidebar__list">
                            <li className="sidebar__list-item">
                                <a className="sidebar__list-item-link" href="/">
                                    <FontAwesomeIcon className="sidebar__list-item-icon" icon={faHome} />
                                    Home
                                </a>
                            </li>
                            <li className="sidebar__list-item">
                                <a className="sidebar__list-item-link" href="https://react-vite-projects-12-sidebar.netlify.app/team">
                                    <FontAwesomeIcon className="sidebar__list-item-icon" icon={faPeopleGroup} />
                                    Team
                                </a>
                            </li>
                            <li className="sidebar__list-item">
                                <a className="sidebar__list-item-link" href="https://react-vite-projects-12-sidebar.netlify.app/team">
                                    <FontAwesomeIcon className="sidebar__list-item-icon" icon={faFolder} />
                                    Projects
                                </a>
                            </li>
                            <li className="sidebar__list-item">
                                <a className="sidebar__list-item-link" href="https://react-vite-projects-12-sidebar.netlify.app/team">
                                    <FontAwesomeIcon className="sidebar__list-item-icon" icon={faCalendarDays} />
                                    Calendar
                                </a>
                            </li>
                            <li className="sidebar__list-item">
                                <a className="sidebar__list-item-link" href="https://react-vite-projects-12-sidebar.netlify.app/team">
                                    <FontAwesomeIcon className="sidebar__list-item-icon" icon={faFileLines} />
                                    Documents
                                </a>
                            </li>
                        </ul>
                    </div>
    
                    <ul className="sidebar__social">
                        <li className="sidebar__social-item">
                            <a href="https://twitter.com/" className="sidebar__social-item-link" ><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li className="sidebar__social-item">
                            <a href="https://twitter.com/" className="sidebar__social-item-link" ><FontAwesomeIcon icon={faFacebook} /></a>
                        </li>
                        <li className="sidebar__social-item">
                            <a href="https://twitter.com/" className="sidebar__social-item-link" ><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                        <li className="sidebar__social-item">
                            <a href="https://twitter.com/" className="sidebar__social-item-link" ><FontAwesomeIcon icon={faBehance} /></a>
                        </li>
                    </ul>
                </div>
            }

            { modal &&
                <div className="modal">
                    <div className="modal__content">
                        <h2 className="modal__content-heading">Modal Content</h2>
                        <FontAwesomeIcon onClick={() => setModal(false)} className="modal__icon" icon={faXmark} />
                    </div>
                </div>
            }

        </div>
     );
}

export default Sidebar;