import LeaderboardItem from "../LeaderboardItem/LeaderboardItem";

const Header = ({ id, sortHandler, sortedOn, sortedBy }) => {
  let append = "";
  if (id.toLowerCase() === sortedOn.toLowerCase()) {
    if (sortedBy === "asc") append = "🔼";
    else append = "🔽";
  }
  return (
    <th onClick={() => sortHandler(id)}>
      {id}
      {append}
    </th>
  );
};

const LeaderboardList = ({ data, sortHandler, sortBy, sortOn }) => {
  const headers = [
    "Rank",
    "Name",
    "Platform",
    "Year",
    "Genre",
    "Publisher",
    "Global_Sales",
  ];
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <Header
              key={header}
              id={header}
              sortHandler={sortHandler}
              sortedOn={sortOn}
              sortedBy={sortBy}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <LeaderboardItem key={d._id} item={d} />
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardList;
