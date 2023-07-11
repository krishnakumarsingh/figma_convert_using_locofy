import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExercisesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrainersClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='trainers']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onLoginClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  return (
    <div className="navbar">
      <div className="nav">
        <button className="logo" onClick={onLogoClick}>
          WORKOUT
        </button>
        <div className="menuright">
          <div className="menulinks">
            <button className="exercises" onClick={onExercisesClick}>
              EXERCISES
            </button>
            <button className="exercises" onClick={onTrainersClick}>
              TRAINERS
            </button>
            <button className="exercises" onClick={onPricingClick}>
              PRICING
            </button>
            <button className="login" onClick={onLoginClick}>
              LOGIN
            </button>
          </div>
          <button className="hamburger-icon">
            <img className="group-2-icon" alt="" src="/group2.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
