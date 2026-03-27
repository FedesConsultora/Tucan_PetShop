import './RedCurve.scss';

const RedCurve = () => {
  return (
    <div className="red-curve-wrapper" aria-hidden="true">
      <svg
        className="red-curve-svg"
        viewBox="0 0 900 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main thick red curve – starts from top-right, sweeps down-left */}
        <path
          d="M 920 -20
             C 880 40, 820 140, 740 220
             C 640 320, 500 400, 340 440
             C 220 468, 100 460, 0 470
             L 0 510
             C 100 500, 220 508, 340 480
             C 500 440, 640 360, 740 260
             C 820 180, 880 80, 920 20
             Z"
          fill="#e32223"
        />
      </svg>
    </div>
  );
};

export default RedCurve;
