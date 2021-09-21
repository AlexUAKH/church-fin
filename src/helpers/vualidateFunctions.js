export const maxChars = (v, n) => {
  return v.length <= n || "errors.maxLength";
};
export const minChars = (v, n) => {
  return v.length > n - 1 || "errors.maxLength";
};
export const isNumerik = v => {
  return Math.sign(v) > 0 || v === "" || "errors.number";
};
export const requireVal = v => {
  return v.length > 0 || "errors.required";
};

// max25chars: v => v.length <= 25 || "Input too long!",
//     isNumerik: v => Math.sign(v) > 0 || v === "" || "Must be an number",
