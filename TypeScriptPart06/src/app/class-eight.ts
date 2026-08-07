let someValue: any = "Some String";

console.log(someValue);

//! Example

const Multiply = (value: String | number): number | String | undefined => {
  if (typeof value === "number") {
    return value * 2;
  }
  if (typeof value === "string") {
    return `Ata akta String {${parseFloat(value) * 2}}`;
  }

  return undefined;
};

const result = Multiply("5") as string;
const result2 = Multiply(5) as number;

console.log({ result });
console.log({ result2 });
