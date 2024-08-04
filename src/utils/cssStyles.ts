import { type CssObject } from './cssObject';

export default function camelCaseToCss(json: CssObject) {
  let css = '';
  for (let key in json) {
    if (json.hasOwnProperty(key)) {
      let styleKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      css += `${styleKey}: ${json[key]};\n`;
    }
  }
  return css;
}
