import React from 'react'
import { FiMenu } from "react-icons/fi";

function HomeLayout({ children }) {

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 0;
    }
    return (
        <div className='min-h-[90vh] '>
            <div className='drawer absolute left-0 z-50 w-fit'>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="cursor-pointer relative  ">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className='font-bold text-white m-4 '
                        />
                    </label>
                </div>
                <div className="drawer-side w-0
                ">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-48 sm:w-80 relative bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout