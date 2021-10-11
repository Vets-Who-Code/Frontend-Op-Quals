module.exports = {
  injectGradingTable: (section) => {
    const table = "\n\n| Section | Grade | Notes |\n" + "| --- | --- | --- |";

    const headerRE = /\#\s.*/;
    let header;
    try {
      header = section.match(headerRE)[0];
    } catch (e) {
      console.error("No header found in section. Grading table not added.");
      return section;
    }
    return header + table + section.replace(headerRE, "");
  },
};
