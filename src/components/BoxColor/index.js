// import './style.css';
import './style.css';

export function BoxColor(props) {
  const backgroundColor = {
    background: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <div id="colors" style={backgroundColor} className="colorBox">
      rgb ({props.r}, {props.g}, {props.b})
    </div>
  );
}
