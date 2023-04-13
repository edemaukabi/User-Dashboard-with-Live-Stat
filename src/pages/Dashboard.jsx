import React, { useState } from 'react'
import{ Sidebar } from '../components/Sidebar'
import Topbar from '../components/Topbar'
import RadarChartTemplate from '../components/RadarChart'
import { AreaChartTemplate } from '../components/TopAreaChart'
import { RoutineReport, weeklyReport } from '../components/RoutineReport'
import { Products } from '../components/Products'
import { products } from '../resources/data'

const Dashboard = () => {

    const [openSidemenu, setOpenSidemenu] = useState(false)
    const [hide, setHide] = useState(false)

    const handleOpenClose = () => {
        setOpenSidemenu(!openSidemenu)
    }

  return (
    <div className="flex">
      {!openSidemenu && <Sidebar handleOpenClose={handleOpenClose} openSidemenu={openSidemenu}/>}
      {openSidemenu && <Sidebar handleOpenClose={handleOpenClose} openSidemenu={openSidemenu}/>}
      <div className="flex-1 text-4xl bg-gullGrayLighter rounded-tl-lg p-6" >
        <Topbar handleOpenClose={handleOpenClose} openSidemenu={openSidemenu}/>
        <AreaChartTemplate />
        <div className="flex justify-between">
        <RoutineReport title="Daily Income" graphType='bar' amount={weeklyReport.dailyIncome} style={{themeColor: "blue", textColor:"white"}} />
        <RoutineReport title="Daily Expense" amount={weeklyReport.dailyExpense} style={{fillColor:"#e396ba", themeColor:"fff", textColor: "black"}}/>
        <RoutineReport title="Weekly Income" graphType='bar' amount={weeklyReport.weeklyIncome} style={{fillColor:"#3767c74d", themeColor:"fff",textColor: "000" }}/>
        <RoutineReport title="Weekly Expense" amount={weeklyReport.weeklyExpense} style={{fillColor:"#e4bca9", themeColor:"fff", textColor: "000"}} />
        </div>
        <div className="flex flex-col justify-between sm:flex-row">
        <RadarChartTemplate />
        <Products products={products}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard