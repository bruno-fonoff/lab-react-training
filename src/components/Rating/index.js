import './style.css';

export function Rating(props) {
  if (Math.round(props.children) === 0) {
    return <p id="stars">☆☆☆☆☆</p>;
  } else if (Math.round(props.children) > 4.9) {
    return <p id="stars">★★★★★</p>;
  } else if (Math.round(props.children) > 3.9) {
    return <p id="stars">★★★★☆</p>;
  } else if (Math.round(props.children) > 2.9) {
    return <p id="stars">★★★☆☆</p>;
  } else if (Math.round(props.children) > 1.5) {
    return <p id="stars">★★☆☆☆</p>;
  } else {
    return <p id="stars">★☆☆☆☆</p>;
  }
}
