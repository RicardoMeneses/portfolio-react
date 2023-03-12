import { useEffect, useState } from 'react';

const Message = () => {
  const [viewed, setViewed] = useState(JSON.parse(localStorage.getItem('viewed') ?? 'false'));
  useEffect(() => {
    setTimeout(() => {
      setViewed(true);
      localStorage.setItem('viewed', 'true');
    }, 5000);
  }, []);
  return (
    <div
      className={`${
        viewed ? 'hidden' : 'fixed'
      } shadow-2xl top-1/4 md:top-2/4 right-16 md:right-24 bg-darkblue dark:bg-white p-3 rounded-md z-20 text-white dark:text-darkblue`}
    >
      <p>Cambia el color aquí {'->'}</p>
    </div>
  );
};

export default Message;
