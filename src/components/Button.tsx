interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, type }: Props) {
  return (
    <button
      className="bg-main rounded-xl px-6 py-2 hover:bg-lighter-main text-sm"
      type={type}
    >
      {children}
    </button>
  );
}
