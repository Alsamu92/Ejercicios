export const Boton = ({ onClick, text }) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    );
  };