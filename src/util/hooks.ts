import React from "react";

export const useInput = <T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>
) => {
  const handleString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(+e.target.value)) {
      setState({
        ...state,
        [e.target.name]: "",
      });
      return;
    }

    if (e.target.value === "") {
      setState({
        ...state,
        [e.target.name]: "",
      });
      return;
    }

    setState({
      ...state,
      [e.target.name]: +e.target.value,
    });
  };

  return {
    handleString,
    handleNumber,
  };
};
