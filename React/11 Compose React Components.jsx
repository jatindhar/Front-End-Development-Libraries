class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
// Change Code Here
<NonCitrus />
<Citrus />
// Change Code Here
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
// Change Code Here
<Fruits />
// Change Code Here
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
