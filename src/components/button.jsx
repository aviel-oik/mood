function Buttond(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.label}
    </button>
  );
}

export default Buttond;