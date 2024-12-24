import React, { memo, useEffect, useState } from 'react';

const Typing = memo(({ text = 'Digitando um texto', time = 150 }) => {
  const [type, setType] = useState('');

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      setType(prev => text.slice(0, prev.length + 1));
    }, time);

    return () => clearTimeout(timer);
  }, [type]);

  return <div>{type}</div>;
});

export default Typing;
