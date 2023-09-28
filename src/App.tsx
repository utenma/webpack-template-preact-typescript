import type { FC } from "react";
import { counter } from "./counter";
import { default as Logo } from './logo.svg'

export const App: FC = () => {

  return (
    <div
      css={{
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>
        Hello World
      </span>
      <Logo
        css={{
          width: 48,
          height: 48,
          transition: 'rotate 1s',
          'div:hover > &': {
            rotate: '180deg'
          }
        }}
      />
      <span>
        {counter.value}
      </span>
      <button
        css={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#777',
          background: 'transparent',
          borderRadius: 8,
          padding: 4,
          ':hover': {
            color: '#fff',
            backgroundColor: '#777',
            borderColor: '#777',
          }
        }}
        onClick={() => counter.value++}
      >
        Count
      </button>
    </div>
  )
}