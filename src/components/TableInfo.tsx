import React from "react";
interface Props {
  infoTabla: { title: string; width: string }[];
}

export default function TableInfo({ infoTabla }: Props) {
  return (
    <ul className="flex w-full items-center justify-between p-6 border-y border-lighter-main">
      {infoTabla.map((item) => (
        <h5
          key={item.title}
          className={`${item.width} flex items-center justify-center`}
        >
          {item.title}
        </h5>
      ))}
    </ul>
  );
}
