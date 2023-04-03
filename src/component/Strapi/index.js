import { faAudioDescription, faChalkboard, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';


import './Strapi.css'

function Strapi() {
    return ( 
        <div className='strapi'>
           <div className='stapi__width'>
                <div className='strapi__header'>
                    <h2 className='strapi__logo'>Strapi</h2>
                    <div className='strapi__navbar'>
                        <Tippy offset={[76, 40]} interactive={true} delay={100} render={attrs => (
                            <div className='stapi-product__dropdow'>
                                <h3 className='stapi-product__dropdow-head'>Product</h3>
                                <ul className='product-dropdow__list'>
                                    <li className='product-dropdow__list-item'>
                                        <FontAwesomeIcon className='product-dropdow__list-item-icon' icon={faEarthAfrica} />
                                        <span>Comunity</span>
                                    </li>
                                    <li className='product-dropdow__list-item'>
                                        <FontAwesomeIcon className='product-dropdow__list-item-icon' icon={faChalkboard} />
                                        <span>Contents</span>
                                    </li>
                                    <li className='product-dropdow__list-item'>
                                        <FontAwesomeIcon className='product-dropdow__list-item-icon' icon={faAudioDescription} />
                                        <span>Roles</span>
                                    </li>
                                </ul>
                            </div>
                        )}>
                            <div className='navbar-item'>Product</div>
                        </Tippy>

                        <Tippy offset={[-33, 40]} interactive={true} delay={100} render={attrs => (
                            <div className='stapi-solution__dropdow'>
                                <h3 className='stapi-solution__dropdow-head'>Solution</h3>
                                <ul className='solution-dropdow__list'>
                                    <div className='solution-wrap__item'>
                                        <li className='solution-dropdow__list-item'>
                                            <FontAwesomeIcon className='solution-dropdow__list-item-icon' icon={faEarthAfrica} />
                                            <span>Comunity</span>
                                        </li>
                                        <li className='solution-dropdow__list-item'>
                                            <FontAwesomeIcon className='solution-dropdow__list-item-icon' icon={faChalkboard} />
                                            <span>Contents</span>
                                        </li>
                                    </div>
                                    <div className='solution-wrap__item'>
                                        <li className='solution-dropdow__list-item'>
                                            <FontAwesomeIcon className='solution-dropdow__list-item-icon' icon={faAudioDescription} />
                                            <span>Roles</span>
                                        </li>
                                        <li className='solution-dropdow__list-item'>
                                            <FontAwesomeIcon className='solution-dropdow__list-item-icon' icon={faAudioDescription} />
                                            <span>Roles</span>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        )}>
                            <div className='navbar-item'>Solutions</div>
                        </Tippy>

                        <Tippy offset={[-149, 40]} interactive={true} delay={100}  render={attrs => (
                            <div className='stapi-product__dropdow'>
                                <h3 className='stapi-product__dropdow-head'>Product</h3>
                                <ul className='product-dropdow__list'>
                                    <li className='product-dropdow__list-item'>
                                        <FontAwesomeIcon className='product-dropdow__list-item-icon' icon={faEarthAfrica} />
                                        <span>Comunity</span>
                                    </li>
                                    <li className='product-dropdow__list-item'>
                                        <FontAwesomeIcon className='product-dropdow__list-item-icon' icon={faChalkboard} />
                                        <span>Contents</span>
                                    </li>
                                </ul>
                            </div>
                        )} >
                            <div className='navbar-item'>Resource</div>
                        </Tippy>
                    </div>
                </div>
                <div className='strapi__body'>
                    <div className='strapi__body-content'>
                        <h1 className='strapi__body-content-heading'>Manage Any Content
                        <br/>
                        Anywhere</h1>
                        <p className='strapi__body-content-description'>Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.</p>
                    </div>
                </div>
           </div>
           {/* dropdow */}
           
        </div>
     );
}

export default Strapi;