import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
  test: () => void;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button
        onClick={() => {
          setCount(count - 1);
          props.test();
        }}
      >
        -1
      </Button>
      <Button
        onClick={() => {
          setCount(count + 1);
          props.test();
        }}
      >
        +1
      </Button>
    </div>
  );
}
