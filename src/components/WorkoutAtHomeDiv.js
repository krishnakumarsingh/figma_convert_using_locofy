import CategoryContainer from "./CategoryContainer";
import "./WorkoutAtHomeDiv.css";
const WorkoutAtHomeDiv = () => {
  return (
    <div className="categoriessection">
      <div className="categoriescolumn">
        <CategoryContainer
          prop="01"
          title="Workout at Home"
          courses="15 videos"
        />
        <img className="separator-icon" alt="" src="/separator.svg" />
        <CategoryContainer
          prop="02"
          title="Stay Strong and Fit"
          courses="48 videos"
        />
        <img className="separator-icon" alt="" src="/separator.svg" />
        <CategoryContainer
          prop="03"
          title="High Intensity"
          courses="48 videos"
        />
        <img className="separator-icon" alt="" src="/separator.svg" />
        <CategoryContainer
          prop="04"
          title="Simple Workout"
          courses="48 videos"
        />
        <img className="separator-icon" alt="" src="/separator.svg" />
        <CategoryContainer
          prop="05"
          title="Burn Calories"
          courses="48 videos"
        />
        <img className="separator-icon" alt="" src="/separator.svg" />
      </div>
    </div>
  );
};

export default WorkoutAtHomeDiv;
