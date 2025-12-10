import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import classNames from "helpers/classNames/classNames";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <Link className={styles.linkMain} to={"/"}>
          Home
        </Link>
        <Link className={styles.link} to={"/about"}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
