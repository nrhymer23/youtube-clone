import React from 'react';
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionIcon} title="Subscription"/>
            <SidebarRow title="Something else"/>
           
        </div>
    );
}

export default Sidebar
