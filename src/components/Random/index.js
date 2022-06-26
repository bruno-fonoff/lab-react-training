import './style.css';

export function Random(props) {
  let random = Math.floor(Math.random() * props.max) + props.min;

  return (
    <div id="result">
      Random Value between {props.min} and {props.max} = {random}
    </div>
  );
}
