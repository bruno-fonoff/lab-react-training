import { useState } from 'react';

export function ClickablePicture(props) {
  const [foto, setFoto] = useState(props.img);

  function handleImage() {
    if (foto === props.img) {
      setFoto(props.imgClicked);
    } else {
      setFoto(props.img);
    }
  }

  return <img onClick={handleImage} src={foto} alt="perfil"></img>;
}
