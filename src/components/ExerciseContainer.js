import { useMemo } from "react";
import "./ExerciseContainer.css";
const ExerciseContainer = ({
  exerciseImageUrl,
  exerciseType,
  exerciseId,
  exerciseImageSize,
  exerciseName,
  exerciseImageId,
  propAlignItems,
  propWidth,
  propAlignSelf,
  propMaxWidth,
  propOverflow,
  propFlexShrink,
}) => {
  const exerciseCardStyle = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  const cardImageIconStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      maxWidth: propMaxWidth,
      overflow: propOverflow,
      flexShrink: propFlexShrink,
    };
  }, [propWidth, propAlignSelf, propMaxWidth, propOverflow, propFlexShrink]);

  return (
    <div className="column-1">
      <div className="exercisecard" style={exerciseCardStyle}>
        <img
          className="cardimage-icon"
          alt=""
          src={exerciseImageUrl}
          style={cardImageIconStyle}
        />
        <div className="text">
          <div className="titles">
            <div className="title1">{exerciseType}</div>
            <div className="subtitle1">{`250 est calories `}</div>
          </div>
          <button className="duration">
            <img className="duration-child" alt="" src={exerciseId} />
            <div className="div">58:24</div>
          </button>
        </div>
      </div>
      <div className="exercisecard">
        <img className="image-icon" alt="" src={exerciseImageSize} />
        <div className="text">
          <div className="titles">
            <div className="title1">{exerciseName}</div>
            <div className="subtitle1">{`250 est calories `}</div>
          </div>
          <button className="duration">
            <img className="duration-child" alt="" src={exerciseImageId} />
            <div className="div">58:24</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseContainer;
