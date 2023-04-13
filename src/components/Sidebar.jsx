import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { sideMenuData } from '../resources/data';
import logo from '../resources/images/retrologo.png';

export const Sidebar = ({handleOpenClose, openSidemenu}) => {

    const [showReport, setShowReport] = React.useState(false);

    const handleMenuClick = (product,e) => {
        if (e.target.innerText === "Reports") {
            setShowReport(!showReport);
        }
    };
  return (
    <div className="bg-gradBlue h-screen w-64 px-2 pt-4">
        <div className='flex justify-between'>
            <NavLink to="/">
            <img src={logo} alt="retrologo" className="w-15 h-10 ml-6 mt-4 mb-8" />
            </NavLink>
            {openSidemenu && <button className='w-fit h-fit mt-4' onClick={handleOpenClose}>
            <IoClose size={"2.0rem"} />
            </button>}
        </div>
      <ul className="ml-4">
        {sideMenuData?.map((item, index) => (
        <li className="mb-2" key={index} onClick={(e) => handleMenuClick(item, e)}>
          <NavLink to={item.link} className={({ isActive }) =>(classNames(`flex space-x-4 py-2 rounded text-gullGray hover:text-primaryIndigo hover:bg-gullGrayLight`, {"bg-gullGrayLight":isActive}))}>
            <span className="pt-1 pl-2">{item.icon}</span>
            <span>{item.title}</span>
            {(item.title === "Reports" && !showReport ) && <RxCaretUp className="pt-1 text-lg" />}
            {(item.title === "Reports" && showReport ) && <RxCaretDown className="pt-1 text-lg" />}
          </NavLink>
        </li>
        ))}
      </ul>
    </div>
  );
};
