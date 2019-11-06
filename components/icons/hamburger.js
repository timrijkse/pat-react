const Hamburger = ({ className, onClick, children }) => (
  <svg className={className} viewBox="0 0 24 14" onClick={onClick}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(0.000000, -5.000000)" fill="#0F0F0F">
        <path
          d="M24,17 L24,19 L0,19 L0,17 L24,17 Z M24,11 L24,13 L0,13 L0,11 L24,11 Z M24,5 L24,7 L0,7 L0,5 L24,5 Z"
          id="Hamburger"
        ></path>
      </g>
    </g>
  </svg>
);

export default Hamburger;
