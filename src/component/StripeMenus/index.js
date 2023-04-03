import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StripeMenus.css";
import Tippy from "@tippyjs/react/headless";
import {
  faBook,
  faBriefcase,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

function StripeMenus() {
  return (
    <div className="stripe">
      <div className="stripe__header">
        <div className="stripe__width stripe__header-wrap">
          <img
            src="https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg"
            className="stripe__header-logo"
          />
          <div className="stripe__header-nav">
            <Tippy
              interactive={true}
              render={(attrs) => (
                <div className="stripe__product-nav">
                  <h3 className="stripe__product-nav-title">product</h3>
                  <div className="stripe__product-nav-list">
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faCreditCard}
                      />
                      <span>Product</span>
                    </div>
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faCreditCard}
                      />
                      <span>Product</span>
                    </div>
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faCreditCard}
                      />
                      <span>Product</span>
                    </div>
                  </div>
                </div>
              )}
            >
              <span className="stripe__header-nav-item">Products</span>
            </Tippy>
            <Tippy
              interactive={true}
              render={(attrs) => (
                <div className="stripe__product-nav">
                  <h3 className="stripe__product-nav-title">Payments</h3>
                  <div className="stripe__product-nav-list">
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faBook}
                      />
                      <span>Payments</span>
                    </div>
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faBook}
                      />
                      <span>Payments</span>
                    </div>
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faBook}
                      />
                      <span>Payments</span>
                    </div>
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faBook}
                      />
                      <span>Payments</span>
                    </div>
                  </div>
                </div>
              )}
            >
              <span className="stripe__header-nav-item">Developers</span>
            </Tippy>
            <Tippy
              interactive={true}
              render={(attrs) => (
                <div className="stripe__product-nav">
                  <h3 className="stripe__product-nav-title">Company</h3>
                  <div className="stripe__product-nav-list">
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faBriefcase}
                      />
                      <span>Company</span>
                    </div>
                    <div className="stripe__product-nav-list-item">
                      <FontAwesomeIcon
                        className="stripe__product-nav-list-item-icon"
                        icon={faBriefcase}
                      />
                      <span>Company</span>
                    </div>
                  </div>
                </div>
              )}
            >
              <span className="stripe__header-nav-item">Company</span>
            </Tippy>
          </div>

          <button className="btn__stripe">Sign in</button>
        </div>
        <div className="stripe__section">
          <div className="stripe__width stripe__section-wrapper">
            <div className="stripe__section-info">
              <h1 className="section-info__heading">
                Payments
                <br />
                infrastructure
                <br />
                for the internet
              </h1>
              <p className="section-info__desription">
                Millions of companies of all sizes—from startups to Fortune
                500s—use Stripe’s software and APIs to accept payments, send
                payouts, and manage their businesses online.
              </p>
              <button className="btn__stripe">Start now</button>
            </div>
            <div className="stripe__section-img">
              <img
                src="https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg"
                className="section-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StripeMenus;
