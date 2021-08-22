import axios from "axios";
const LeaderboardItem = ({ item }) => {
  const onChangeHandler = (e) => {
    const value = e.target.innerText;
    const _id = e.target.parentElement.id;
    const key = e.target.dataset.tag;
    axios
      .post("http://localhost:4000/api/leaderboard/update", { key, value, _id })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <tr id={item._id}>
      <td
        contentEditable
        onBlur={onChangeHandler}
        suppressContentEditableWarning={true}
        data-tag="Rank"
      >
        {item.Rank}
      </td>
      <td
        contentEditable
        onBlur={onChangeHandler}
        suppressContentEditableWarning={true}
        data-tag="Name"
      >
        {item.Name}
      </td>
      <td
        contentEditable
        onBlur={onChangeHandler}
        suppressContentEditableWarning={true}
        data-tag="Platform"
      >
        {item.Platform}
      </td>
      <td
        contentEditable
        onBlur={onChangeHandler}
        suppressContentEditableWarning={true}
        data-tag="Year"
      >
        {item.Year}
      </td>
      <td
        contentEditable
        onBlur={onChangeHandler}
        suppressContentEditableWarning={true}
        data-tag="Genre"
      >
        {item.Genre}
      </td>
      <td
        contentEditable
        onBlur={onChangeHandler}
        suppressContentEditableWarning={true}
        data-tag="Publisher"
      >
        {item.Publisher}
      </td>
      <td
        contentEditable
        onBlur={onChangeHandler}
        suppressContentEditableWarning={true}
        data-tag="Global_Sales"
      >
        {item.Global_Sales}
      </td>
    </tr>
  );
};

export default LeaderboardItem;
