interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-main rounded-xl w-40 px-5 flex justify-between items-center hover:bg-lighter-main">
      <div>+</div>
      {children}
    </button>
  );
}
