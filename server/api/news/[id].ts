export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  return '小明'+id
});