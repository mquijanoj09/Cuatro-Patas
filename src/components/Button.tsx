interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-main rounded-xl px-6 py-2 hover:bg-lighter-main text-sm">
      {children}
    </button>
  );
}
