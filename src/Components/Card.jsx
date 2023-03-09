
function Card(props) {
  return (
    <div className="class-card">
        <h1>Congratulations successful registration!!!</h1>
        <p>Name: {props.name}</p>
        <p>LastName: {props.lastname}</p>
    </div>
  );
}

export default Card;
