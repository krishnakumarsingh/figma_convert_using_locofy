import "./CategoryContainer.css";
const CategoryContainer = ({ prop, title, courses }) => {
  return (
    <div className="category">
      <div className="div4">{prop}</div>
      <div className="action">
        <div className="titles2">
          <div className="title5">{title}</div>
          <div className="courses">{courses}</div>
        </div>
        <img className="arrow-icon" alt="" src="/arrow.svg" />
      </div>
    </div>
  );
};

export default CategoryContainer;
