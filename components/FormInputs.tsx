import { NextPage } from "next";
import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type fields =
  | "firstName"
  | "lastName"
  | "email"
  | "password"
  | "confirmPassword"
  | "phoneNumber";

type Props = {
  id: fields;
  title: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
};

const FormInput: NextPage<Props> = ({ id, title, type, register }) => {
  return (
    <div>
      <label className="block mb-2 font-bold text-gray-600" htmlFor="Last Name">
        {title}
      </label>
      <input
        id={id}
        data-testid={id}
        className="block w-full px-4 py-4 text-gray-700 border-2 focus:border-info focus:outline-none"
        type={type}
        {...register}
        placeholder={title}
        required
      />
    </div>
  );
};

export default FormInput;
