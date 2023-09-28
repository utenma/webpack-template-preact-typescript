import { FC, useState } from "preact/compat"

export const App = () => {

  const [state, se] = useState(0)
  return (
    <div>
      Hello Wsosrssdsdslsd{state}
      <button
        onClick={() => se(1)}
      >
        test
      </button>
    </div>
  )
}