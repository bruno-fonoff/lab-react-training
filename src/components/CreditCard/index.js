import './style.css';
import Visa from '../../assets/images/visa.png';
import Master from '../../assets/images/master-card.svg';

export function CreditCard(props) {
  const bandeira = props.type === 'Visa' ? Visa : Master;
  const cardNumber = props.number.slice(-4);

  let color = { backgroundColor: props.bgColor, color: props.color };

  return (
    <div className="card" style={color}>
      <img className="bandeira" src={bandeira} alt="bandeira"></img>
      <div className="numberCard">•••• •••• •••• •••• {cardNumber}</div>
      <div className="name">
        Expires{' '}
        <span id="expireDate">
          {props.expirationMonth}/{props.expirationYear}
        </span>{' '}
        <span className="name"> {props.bank}</span>
      </div>
      <div className="name">{props.owner} </div>
    </div>
  );
}
