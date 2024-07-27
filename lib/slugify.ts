export default function (text: string) {
  return text
    .trim()
    .split(" ")
    .map((item) => item.toLowerCase())
    .join("-");
}
