export function helloWorld(hello: string) {
  console.log("hello:", hello);
  return hello;
}
export function helloAnything(thing: string): string {
  return `Hello ${thing}!`
}