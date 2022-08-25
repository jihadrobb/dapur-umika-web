const en = require("./translation.en.json");
const id = require("./translation.id.json");

const i18n = {
  translations: {
    en,
    id,
  },
  defaultLang: "id",
  useBrowserDefault: true,
};

module.exports = i18n;
