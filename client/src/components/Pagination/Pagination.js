import classes from "./Pagination.module.css";

const Pagination = ({ page, nextPageHandler, previousPageHandler }) => {
  return (
    <div className={classes.pagination}>
      <span onClick={previousPageHandler}>❮ </span>
      <span>{page}</span>
      <span onClick={nextPageHandler}> ❯</span>
    </div>
  );
};

export default Pagination;
