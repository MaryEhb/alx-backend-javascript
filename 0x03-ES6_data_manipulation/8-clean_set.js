export default function cleanSet(set, startString) {
  const result = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
