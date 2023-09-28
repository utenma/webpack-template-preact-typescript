import type { FC } from "react";
import { counter } from "./counter";

export const App: FC = () => {

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}
    >
      <span>
        Hello World {counter.value}
      </span>
      <button
        css={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'gray',
          background: 'transparent',
          ':hover': {
            color: 'white',
            backgroundColor: 'gray',
            borderColor: 'gray'
          }
        }}
        onClick={() => counter.value++}
      >
        Count
      </button>
    </div>
  )
}