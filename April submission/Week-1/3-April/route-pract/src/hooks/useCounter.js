import React from 'react'
import { useState } from 'react'

function useCounter() {

    const [cnt, setCnt] = useState(0)

    const incr  = () => {
        setCnt(cnt+1)
    }

    const decr  = () => {
        setCnt(cnt-1)
    }
  return [cnt, incr, decr]
}

export default useCounter
