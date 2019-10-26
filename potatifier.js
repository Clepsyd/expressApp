function potate(str) {
  let name = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u", "y"];
  if (vowels.includes(name[name.length - 1])) {
    name = name.substring(0, name.length - 1);
  }
  return "Po" + name.toLowerCase() + "ito";
}

module.exports = potate;