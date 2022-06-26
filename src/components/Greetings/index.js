import './style.css';

export function Greetings(props) {
  if (props.lang === 'de') {
    return <p id="fraseIdioma">Guten Morgen {props.children}</p>;
  }
  if (props.lang === 'fr') {
    return <p id="fraseIdioma">Bonjour {props.children}</p>;
  }
  if (props.lang === 'br') {
    return <p id="fraseIdioma">Bom dia {props.children}</p>;
  }
  if (props.lang === 'it') {
    return <p id="fraseIdioma">Buongiorno {props.children}</p>;
  }
  if (props.lang === 'es') {
    return <p id="fraseIdioma">Buen día {props.children}</p>;
  }
}
