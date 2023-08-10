module.exports = {
  manifest_version: 3,
  name: "Chill Magento",
  permissions: ["contextMenus", "tabs"],
  content_scripts: [
    {
      js: ["content.js"],
      matches: [
        "https://www.neonet.pl/admin_x90nun/*",
        "https://dev.neonet.pl/*",
        "https://qa-pwa.neonet.pl/*",
      ],
    },
  ],
  action: {
    default_icon: "favicon.png",
  },
  web_accessible_resources: [
    {
      resources: ["*.json"],
      matches: ["<all_urls>"],
    },
  ],
};
