import { InputText } from "primereact";
import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  size?: number;
}

export const Input: React.FC<IProps> = ({ label, name, size, ...rest }) => {
  return (
    <>
      <div
        className={`col-12 md:col-${(size === null ? "md" : size) || ""} mr-8`}
      >
        <label className="font-medium" htmlFor={name}>
          {label}
        </label>
        <InputText className="mt-1" id={name} type="text" {...rest} />
      </div>
    </>
  );
};
