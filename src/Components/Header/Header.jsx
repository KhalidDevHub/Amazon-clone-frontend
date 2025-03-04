import React, {useContext} from "react";
import classes from "./header.module.css";
import Logo from "../../assets/images/amazon_PNG11.png";
import FlagUSA from "../../assets/images/Flag.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DateContext } from "../DateProvider/DateProvider";
const Header = () => {
  const [{basket}, dispatch] = useContext(DateContext);
  
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo section*/}
          <div className={classes.logo_container}>
            <Link to="/">
              <img src={Logo} alt="Amazon logo" />
            </Link>

            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>

              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="search-category">
              <option value="">All</option>
            </select>
            <input
              type="text"
              name=""
              id="search-input"
              placeholder="Search Amazon"
            />
            {/* icon */}
            <BsSearch size={39} />
          </div>
          <div className={classes.order_container}>
            <Link to="/orders" className={classes.language}>
              <img src={FlagUSA} alt="USA flag" />
              <select name="" id="language-select">
                <option value="">EN</option>
              </select>
            </Link>

            {/* three components */}
            <Link to="/auth">
              <div>
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* Returns & Orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <p>Cart</p>
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
