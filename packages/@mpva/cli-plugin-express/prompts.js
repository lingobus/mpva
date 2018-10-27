module.exports = [{
  "name": "name",
  "type": "string",
  "required": true,
  "message": "Project name, dash seperated words, no space or punctuations"
}, {
  "name": "domain",
  "type": "string",
  "required": true,
  "message": "Domain name, like google.com, no prefix `www.`"
}, {
  "name": "productionCDN",
  "type": "string",
  "required": false,
  "message": "CDN for production, e.g: files.cdndomain.com"
}, {
  "name": "devCDN",
  "type": "string",
  "required": false,
  "message": "CDN for development, e.g: dev-files.cdndomain.com"
}, {
  "name": "productionPort",
  "type": "number",
  "required": true,
  "default": 8000,
  "message": "production server port"
}, {
  "name": "devPort",
  "type": "number",
  "required": true,
  "default": 8000,
  "message": "dev server port"
}, {
  "name": "useProxy",
  "type": "confirm",
  "message": "Do you want to enable proxy table?"
}, {
  "name": "sitemap",
  "type": "confirm",
  "message": "Do you want to use a sitemap?"
}, {
  "name": "useMock",
  "type": "confirm",
  "message": "Do you want to enable API mock?"
}]