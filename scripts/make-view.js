const fs = require("fs");
const path = require("path");

function makeView(name) {
  if (name === undefined) {
    console.log("\x1b[31m%s\x1b[0m", "Missing view name");
    console.log("\x1b[31m%s\x1b[0m", "node action make-view [view-name]");
    return;
  }
  const template = `<template>
  <div></div>
</template>

<script>
export default {
  name: "${name}",
  data() {
    return {
      // Add data here
    }
  },
  methods: {
    // Add methods here
  }
};
</script>

<style lang="scss" scoped>
</style>`;
  // Saved in src/views
  let newFilePath =
    path.join(__dirname, "../", "src", "views/") + name + ".vue";

  fs.writeFile(newFilePath, template, err => {
    if (err) {
      return console.log(err);
    }

    console.log(name + ".vue has been generated successfully.");
  });
}

module.exports = {
  makeView
};
