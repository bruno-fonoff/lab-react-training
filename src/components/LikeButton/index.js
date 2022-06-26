import { useState } from 'react';
import './style.css';

export function LikeButton() {
  const [like, setLike] = useState(0);

  function liked() {
    setLike(like + 1);
  }

  return (
    <button id="like" onClick={liked}>
      {like} {like < '2' ? 'Like' : 'Likes'}
    </button>
  );
}
