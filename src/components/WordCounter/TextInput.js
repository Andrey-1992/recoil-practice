import { useRecoilState } from "recoil"

const textState = atom({
  key: 'textState',
  default: '',
})

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}