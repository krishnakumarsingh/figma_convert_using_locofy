import { useCallback } from "react";
import "./WorkoutProgramCard.css";
const WorkoutProgramCard = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  return (
    <div className="trainers1" data-scroll-to="trainers">
      <div className="trainerscta">
        <div className="ctaframe">
          <div className="background" />
          <div className="title4">
            <h2 className="workout-program-made-container">
              <p className="workout">Workout</p>
              <p className="workout">Program</p>
              <p className="workout">Made</p>
              <p className="workout">For You</p>
            </h2>
            <img className="splash-icon" alt="" src="/splash.svg" />
          </div>
          <div className="description">
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing.
            </div>
            <button className="button2" onClick={onButtonClick}>
              <div className="get-started">Get Started</div>
            </button>
          </div>
        </div>
      </div>
      <div className="trainersimages">
        <div className="desktop">
          <div className="trainer-3">
            <img className="trainer-3-child" alt="" src="/group-142@2x.png" />
            <div className="samantha-william">Samantha William</div>
            <div className="trainer">Trainer</div>
          </div>
          <div className="trainer-2">
            <img className="trainer-3-child" alt="" src="/group-147@2x.png" />
            <div className="samantha-william">Karen Summer</div>
            <div className="trainer">Trainer</div>
          </div>
          <div className="trainer-1">
            <img className="trainer-1-child" alt="" src="/group-146@2x.png" />
            <div className="jonathan-wise">Jonathan Wise</div>
            <div className="trainer2">Trainer</div>
          </div>
        </div>
        <div className="tablet">
          <div className="trainer-31">
            <img className="trainer-3-item" alt="" src="/group-1471@2x.png" />
            <div className="karen-summer1">Karen Summer</div>
            <div className="trainer3">Trainer</div>
          </div>
          <div className="trainer-21">
            <img className="trainer-2-item" alt="" src="/group-1461@2x.png" />
            <div className="jonathan-wise1">Jonathan Wise</div>
            <div className="trainer4">Trainer</div>
          </div>
          <div className="trainer-11">
            <img className="trainer-1-item" alt="" src="/group-1421@2x.png" />
            <div className="samantha-william1">Samantha William</div>
            <div className="trainer5">Trainer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutProgramCard;
