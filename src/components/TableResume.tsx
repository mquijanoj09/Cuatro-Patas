import React from "react";

type Props = {
  resumenTabla: {
    title: string;
    value: string;
    button?: boolean;
    buttonColor?: string;
  }[];
};

export default function TableResume({ resumenTabla }: Props) {
  return (
    <ul className="flex w-full justify-between mb-5 px-5">
      {resumenTabla.map((item) => (
        <li key={item.title} className="flex flex-col items-center">
          <h5>{item.value}</h5>
          <div className="flex gap-2">
            {item.button && (
              <div className={`rounded-full p-1 my-2 ${item.buttonColor}`} />
            )}
            <h5 className="min-w-fit">{item.title}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
}
