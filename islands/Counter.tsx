import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
  onUpdate: (value: number) => void;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-2 w-full">
      <Button
        onClick={() => {
          props.onUpdate(-1);
        }}
      >
        -1
      </Button>
      <Button
        onClick={() => {
          props.onUpdate(+1);
        }}
      >
        +1
      </Button>
    </div>
  );
}
