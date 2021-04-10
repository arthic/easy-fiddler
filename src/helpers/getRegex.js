// console.log(process.argv[2]);
export const getRegex = (url) => {

  function replacer(str, p1, p2, offset, s) {
    return "\\" + str;
  }
  function replacerOne(str, p1, p2, offset, s) {
    return "^" + str + "\\";
  }
  function replacerTwo(str, p1, p2, offset, s) {
    return "v=.*"
  }
  console.log('a')
  let resultado = url
    .replace(/[-./_?]/g, replacer)
    .replace(/https/, replacerOne)
    .replace("EXACT", "regex")
    .replace(/v=.*/, replacerTwo);

  console.log(resultado);
  return resultado
}
