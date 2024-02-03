import { useEffect } from "react";
import { Link } from "react-router-dom";
import tenoxui, { makeStyles } from "tenoxui";

const Navbar = () => {
  useEffect(() => {
    // Style without calling `Styler()`
    const NavbarStyles = {
      nav: "ph-2em pv-1em post-fixed t-0 w-100% display-flex ai-center jc-[sb] bg-[neutral-100] z-999",
      "nav header h1": "fs-1em",
      "nav header p": "fs-12px fw-500",
      "nav ul": "display-flex flex-parent-center gap-1em",
      "nav ul li a": "tc-black fw-500 fs-14px",
    };
    // Apply styles 'NavbarStyles' with tenoxui
    makeStyles(NavbarStyles);
    tenoxui();
  }, []);

  return (
    <nav>
      <header>
        <h1>Tex</h1>
        <p>Tenox Style Example</p>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tenox">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
