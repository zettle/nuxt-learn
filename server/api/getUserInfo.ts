export default defineEventHandler((event) => {
  const str = capitalize('hello world');
  console.log(str);
  return str;
});