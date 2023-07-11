import { useCallback } from "react";
import { Button } from "@mui/material";
import "./CardioExerciseContainer.css";
const CardioExerciseContainer = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="herosection">
      <div className="herotext">
        <div className="newcallout">
          <div className="newcallout-child" />
          <div className="newcallout-item" />
          <div className="new">NEW</div>
          <div className="high-intensity-workout">
            High Intensity workout to burn calories
          </div>
        </div>
        <div className="herocta">
          <div className="title">
            <p className="cardio">{`Cardio `}</p>
            <p className="cardio">Exercise</p>
          </div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="buttonrow">
            <Button
              className="button"
              variant="contained"
              color="success"
              onClick={onButtonClick}
            >
              Get Started
            </Button>
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={onButton1Click}
            >
              Preview
            </Button>
          </div>
        </div>
      </div>
      <img className="heroimage-icon" alt="" src="/vector@2x.png" />
    </div>
  );
};

export default CardioExerciseContainer;
