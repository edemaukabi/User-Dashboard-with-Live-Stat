import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Search } from './Search'
import { userData } from '../resources/data'

export const Topbar = ({ handleOpenClose, openSidemenu }) => {
  return (
    <div className="flex justify-between">
        <Search />
        <div className="flex">
            <div className="flex flex-col text-right">
                <span className="text-sm">{userData.email}</span>
                <span className="text-sm font-semibold text-gray-500">{userData.role}</span>
            </div>
            <div className="">
                <img src={userData.image} alt="avatar" className="w-10 h-10 ml-3 mb-8 rounded-full" />
            </div>
        </div>
        {!openSidemenu && <button className='w-fit h-fit md:hidden' onClick={handleOpenClose}>
            <GiHamburgerMenu size={"1.5rem"} />
        </button>}
    </div>
  )
}

export default Topbar