import React from 'react'
import DirectChild from './DirectChild'

// A Child-to-parent communication is 
//done via props ⤵
export default props=>{
    return(
        <div>
            <DirectChild name="Barry" age={20} nerd={true}></DirectChild>
            <DirectChild name="Jacob" age={17} nerd={false}></DirectChild>
        </div>
    )
}