function Input(props) {
  return (
    <input
      required
      ref={props.inputref}
      {...props}
      className="bg-transparent mb-2 p-2 border-b-2 border-violet-200 focus:border-violet-400"
    />
  );
}

export default Input;
