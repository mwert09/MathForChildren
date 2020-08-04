import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import "./Home.scss";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-wrap modlar">
      
        <div className="p-2">
          <Link className="nav-link" to="/pratik">
            Pratik
          </Link>
        </div>

        <div className="p-2">
          <Link className="nav-link" to="/zamanakarsi">
            {" "}
            Zamana Karşı
          </Link>
        </div>

        <div className="p-2">
          <Link className="nav-link" to="/sonsuzmod">
            {" "}
            Sonsuz Mod{" "}
          </Link>
        </div>
      
    </div>
  );
};

export default Home;
