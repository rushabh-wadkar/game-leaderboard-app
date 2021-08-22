import { useEffect, useState } from "react";
import { fetchLeaderboard } from "../../store/actions/actionsCreators";
import { connect } from "react-redux";
import LeaderboardList from "../LeaderboardList/LeaderboardList";
import Pagination from "../Pagination/Pagination";

let timer = null;

const Leaderboard = ({ loading, error, data, fetchData }) => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("asc");
  const [sortOn, setSortOn] = useState("Rank");

  const onNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onPreviousPage = () => {
    if (page >= 2) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const onSort = (sort) => {
    setSortBy((prev) => {
      if (prev === "asc") return "desc";
      if (prev === "desc") return "asc";
    });
    setSortOn(sort);
  };

  useEffect(() => {
    fetchData(page, sortBy, sortOn);
  }, [page, sortBy, sortOn]);

  useEffect(() => {
    timer = setInterval(() => {
      fetchData(page, sortBy, sortOn);
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, [page, sortBy, sortOn]);

  if (loading) {
    return <h2>Loading</h2>;
  }
  if (!data.length) {
    return <h3>No Data</h3>;
  }
  return (
    <div className="container accented">
      <h2>
        <em>Leaderboard</em>
      </h2>
      <LeaderboardList
        data={data}
        sortHandler={onSort}
        sortBy={sortBy}
        sortOn={sortOn}
      />
      <Pagination
        page={page}
        nextPageHandler={onNextPage}
        previousPageHandler={onPreviousPage}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.leaderboard.page,
    loading: state.leaderboard.loading,
    error: state.leaderboard.error,
    data: state.leaderboard.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (page, sortBy, sortOn) =>
      dispatch(fetchLeaderboard(page, sortBy, sortOn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
