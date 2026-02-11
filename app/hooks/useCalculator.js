import { useState } from "react";
import { evaluate } from "mathjs";

export default function useCalculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    // If there's a result and the user starts typing a number, clear the result to start fresh
    if (result && !["+", "-", "*", "/"].includes(value)) {
      setExpression(value);
      setResult("");
      return;
    }

    // If there's a result and user types an operator, continue from the result
    if (result && ["+", "-", "*", "/"].includes(value)) {
      setExpression(result + value);
      setResult("");
      return;
    }

    setExpression((prev) => prev + value);
  };

  const calculate = () => {
    if (!expression) return;
    try {
      const calculatedResult = evaluate(expression);
      setResult(calculatedResult.toString());
      setExpression(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  const deleteLast = () => {
    if (result) {
      setResult("");
      setExpression("");
      return;
    }
    setExpression((prev) => prev.slice(0, -1));
  };

  return {
    expression,
    result,
    handleButtonClick,
    calculate,
    clear,
    deleteLast,
  };
}
