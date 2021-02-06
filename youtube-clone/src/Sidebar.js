import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
    return (
        <div className="sidebar">
           <h2> I am the sidebar </h2>

            <SidebarRow title="Home"/>
            <SidebarRow title="Trending"/>
            <SidebarRow title="Subscription"/>
            <SidebarRow title="Something else"/>
           
        </div>
    );
}

export default Sidebar
