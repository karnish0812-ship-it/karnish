import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="karnish" age={18}     
        marks={[91,92,93,94,95,]}
        person={{ name:"karnish",dept:["AIDS","CT"]}}/>
    </div>
  )
}

export default Parent