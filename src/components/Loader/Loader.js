import React from 'react';

const Loader = () => {
  const [isShown, setShown] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShown(false);
    }, 1000);
  }, []);

  return (
    <div id="loader" className={`fullscreen${isShown ? ' show' : ''}`}>
      <svg className="circular" width="48px" height="48px">
        <circle
          className="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#eeeeee"
        />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#ff7a5c"
        />
      </svg>
    </div>
  );
};

export default Loader;
