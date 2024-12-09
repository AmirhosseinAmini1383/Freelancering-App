export default function truncateText(str, limit) {
  if (str.length < limit) return str;
  return str.slice(0, limit) + "...";
}
