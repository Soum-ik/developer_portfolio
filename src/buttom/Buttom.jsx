export default function Button({ children, bg}, props) {
  // console.log(props);
  // const [color] = bg;
  console.log(props.bg);
  return (
    <button
      className={` text-mainColor bg-transparent border border-mainColor/75 px-4 py-2 rounded-lg  ${
        bg ? " bg-mainColor/20" : " bg-transparent "
      }`}
    >
      {children}
    </button>
  );
}
