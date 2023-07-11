import ExerciseContainer from "./ExerciseContainer";
import "./PopularExercisesDiv.css";
const PopularExercisesDiv = () => {
  return (
    <div
      className="popularexercisessection"
      data-scroll-to="popularExercisesSection"
    >
      <div className="popularexercises">
        <div className="title3">
          <div className="popular-exercises">Popular Exercises</div>
          <div className="see-more-exercises">SEE MORE EXERCISES</div>
        </div>
        <div className="exercisecards">
          <ExerciseContainer
            exerciseImageUrl="/cardimage@2x.png"
            exerciseType="Treadmill"
            exerciseId="/rectangle-10.svg"
            exerciseImageSize="/image@2x.png"
            exerciseName="Running"
            exerciseImageId="/rectangle-10.svg"
            propAlignItems="center"
            propWidth="373px"
          />
          <ExerciseContainer
            exerciseImageUrl="/cardimage1@2x.png"
            exerciseType="Stretching"
            exerciseId="/rectangle-101.svg"
            exerciseImageSize="/group-6@2x.png"
            exerciseName="Lifting"
            exerciseImageId="/rectangle-101.svg"
            propAlignItems="flex-start"
            propWidth="unset"
            propAlignSelf="stretch"
            propMaxWidth="100%"
            propOverflow="hidden"
            propFlexShrink="0"
          />
          <div className="column-3">
            <div className="exercisecard2">
              <img
                className="exercisecard-child"
                alt=""
                src="/group-61@2x.png"
              />
              <div className="frame-parent">
                <div className="yoga-parent">
                  <div className="popular-exercises">Yoga</div>
                  <div className="est-calories">{`250 est calories `}</div>
                </div>
                <button className="vector-parent">
                  <img
                    className="group-child"
                    alt=""
                    src="/rectangle-102.svg"
                  />
                  <div className="div2">58:24</div>
                </button>
              </div>
            </div>
            <div className="exercisecard3">
              <img
                className="exercisecard-child"
                alt=""
                src="/group-62@2x.png"
              />
              <div className="frame-parent">
                <div className="yoga-parent">
                  <div className="popular-exercises">Pushup</div>
                  <div className="est-calories">{`250 est calories `}</div>
                </div>
                <button className="timeframe">
                  <img
                    className="timeframe-child"
                    alt=""
                    src="/rectangle-102.svg"
                  />
                  <div className="div3">58:24</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularExercisesDiv;
