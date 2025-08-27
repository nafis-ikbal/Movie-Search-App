const modifyTitle = (text) => 
  text.toLowerCase()
        .replace(/\s+/g, "-")   // spaces → dashes
        .replace(/:/g, "")      // remove colons
        .replace(/[^a-z0-9-]/g, ""); // remove other special chars


export {modifyTitle};