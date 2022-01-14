import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
})

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
      <br />
      Echo: {text}
    </div>
  )
};

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState); // Must take the atom (textState)

    return text.length;
  },
});
  
export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};