const List = props => {
// Change Code Here
  return <p>{props.tasks.join(", ")}</p>;
// Change Code Here
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
// Change Code Here
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
// Change Code Here
      </div>
    );
  }
}
