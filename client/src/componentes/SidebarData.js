import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }, 
    {
        title: "Ventas",
        path: "/ventas",
        icon: <FaIcons.FaChartArea />,
        cName: 'nav-text'
    }, 
    {
        title: "Clientes",
        path: "/clientes",
        icon: <FaIcons.FaUserFriends />,
        cName: 'nav-text'
    }
]