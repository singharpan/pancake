let object = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: {
      isReact: "yes",
      isVue: "no",
    },
  },
};

const flattenObject = (obj) => {
  let result = {};
  for (const el in obj) {
    if (typeof obj[el] === "object" && !Array.isArray(obj[el])) {
      const temp = flattenObject(obj[el]);
      for (const nestedEl in temp) {
        result[`${el}_${nestedEl}`] = temp[nestedEl];
      }
    } else {
      result[el] = obj[el];
    }
  }
  return result;
};

const res = flattenObject(object);
console.log(res, "res");
