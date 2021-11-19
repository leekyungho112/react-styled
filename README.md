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

### animation keyframes

```js
const animation = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;
```

## Typescript 적용하기

- 기존 프로젝트에 적용시

```js
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

-props required여부를 정해줄때 optional Props을 줄때 ? 을 사용한다.

```js
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}
```

## CRYPTO TRACKER

- react-query를 사용하기 전에는 개발자의 로직에 따라 api를 fetch하였지만

```js
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
```

- react-query를 사용한후에는 state들과 fetch를 대체할수 있게 되었다.

```js
const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
```

### PreView

[Crypto Tracker]('https://leekyungho112.github.io/react-styled/')
