ReactElement

- 화면에 그려질 엘리먼트의 정보를 담은 자바스크립트 객체

```js
function ReactElement(type, props) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    props,
  };

  return element;
}
```
