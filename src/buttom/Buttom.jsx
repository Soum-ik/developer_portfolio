export default function Button({ children, props }) {
  console.log(props);
  return (
    <button
      className={` text-mainColor bg-transparent border border-mainColor/75 px-3 py-1 rounded-lg ${
        props ? " bg-mainColor/20" : ""
      }`}
    >
      {children}
    </button>
  );
}
