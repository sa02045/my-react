import { REACT_ELEMENT_TYPE } from "./shared/ReactSymbols";

function ReactElement(type, props) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    props,
  };

  return element;
}

export function jsx(type, config) {
  let propName;
  const props = {};

  for (propName in config) {
    props[propName] = config[propName];
  }

  return ReactElement(type, props);
}
