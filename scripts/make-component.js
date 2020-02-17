const fs = require("fs");
const path = require("path");

function makeComponent(name) {
  if (name === undefined) {
    console.log("Missing component name");
    console.log("node action make-component [component-name]");
    return;
  }
  const template = `<template>
  <div></div>
</template>

<script>
export default {
  name: "${name}",
  props: {
    myProp: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      // Add data here
    }
  }
};
</script>

<style scoped>
</style>`;
  // Saved in src/components
  let newFilePath =
    path.join(__dirname, "../", "src", "components/") + name + ".vue";

  fs.writeFile(newFilePath, template, err => {
    if (err) {
      return console.log(err);
    }

    console.log(name + ".vue has been generated successfully.");
  });
}

module.exports = {
  makeComponent
};
