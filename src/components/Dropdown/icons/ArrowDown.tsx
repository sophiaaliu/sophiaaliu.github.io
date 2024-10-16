export const ArrowDown = (props: { color: string; className?: string }) => {
  const { color, className } = props;
  return (
    <svg
      className={className}
      width="17"
      height="9"
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 8.5L0 0.5H17L8.5 8.5Z" fill={color} />
    </svg>
  );
};
