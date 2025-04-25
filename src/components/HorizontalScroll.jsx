import React from "react"


const HorizontalScroll=({children})=>{
    return <div className="overflow-x-auto">
        {children}
    </div>
}

export default HorizontalScroll