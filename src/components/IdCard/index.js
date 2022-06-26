import './style.css';

export function IdCard(props) {
  return (
    <>
      <div id="idCard">
        {<img src={props.picture} alt="foto perfil"></img>}
        <div id="profile">
          <p>
            <b>First Name:</b> {props.firstName}
          </p>
          <p>
            <b>Last Name:</b> {props.lastName}
          </p>
          <p>
            <b>Gender:</b> {props.gender}
          </p>
          <p>
            <b>Height:</b> {props.height / 100}m
          </p>
          <p>
            <b>Birth:</b> {props.birth}
          </p>
        </div>
      </div>
    </>
  );
}
