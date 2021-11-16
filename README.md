# Styled-Components practice

- 스타일 컴포넌트의 장점으로는 가독성이 좋아진다.
- props를 통해 설정 변경이 가능한 컴포넌트를 만들수 있다.

```js
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

  <Box bgColor="teal" />
  <Box bgColor="tomato" />
```

- 확장성
- Box에 설정되어있는 모든 프로퍼티들을 가져와 사용하고 circle에 적용한 프로퍼티 속성을 추가 적용한다.

```js
const Circle = styled(Box)`
  border-radius: 50px;
`;
```
