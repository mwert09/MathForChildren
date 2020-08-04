import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import "./SonsuzMod.scss";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-wrap modlar">
      
        <div className="p-2">
          <Link className="nav-link" to="/toplama">
            Toplama
          </Link>
        </div>

        <div className="p-2">
          <Link className="nav-link" to="/cikarma">
            {" "}
            Çıkarma
          </Link>
        </div>

        <div className="p-2">
          <Link className="nav-link" to="/carpma">
            {" "}
            Çarpma{" "}
          </Link>
        </div>

        <div className="p-2">
          <Link className="nav-link" to="/bolme">
            {" "}
            Bölme{" "}
          </Link>
        </div>
      
    </div>
  );
};

export default Home;
