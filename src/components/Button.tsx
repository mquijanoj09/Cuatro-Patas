interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, type, onClick, className }: Props) {
  return (
    <button
      className={` ${
        className ||
        "bg-main rounded-xl px-6 py-2 hover:bg-lighter-main text-sm "
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
