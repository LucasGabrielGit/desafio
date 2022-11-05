import { InputMask } from "primereact";
import React, { InputHTMLAttributes, useState } from "react";

import "./styles.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  size: number;
  maskType: string;
}

export const CInputMask: React.FC<IProps> = ({
  label,
  name,
  size,
  maskType,
}) => {
  const [readonly, setReadonly] = useState(false);

  return (
    <>
      <div className={`col-12 md:col-${size} mr-4`}>
        <label className="font-medium" htmlFor={name}>
          {label}
        </label>
        <InputMask
          id={name}
          mask={maskType}
          onBlur={(e) => {
            if (e.target.value === "") return;

            setReadonly(true);
          }}
          readOnly={readonly}
          className="input-mask mt-1"
        />
      </div>
    </>
  );
};
