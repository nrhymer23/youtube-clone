import React from 'react'

function SidebarRow({ title }) {
    return (
        <div className="sidebarRow">
            <HomeIcon />
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarRow
