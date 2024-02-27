import React from 'react'
import { MdArrowUpward } from "react-icons/md";
import './Chart.css'

const Chart = () => {
  return (
    <div className='chart-wrapper'>
                    <div className="chart">
                        <div className='chart-heading text-sm--md'>Open Rate</div>
                        <div className="chart-details">
                            <div className="number-and-badge">
                                <div className="number-and-badge-left">
                                    <div className='top-part display-xs--sb'>
                                        6.87%
                                    </div>
                                    <div className='bottom-part'>
                                        <div className='bottom-part-left'>
                                            <div className='bottom-part-left-arrow'><MdArrowUpward /></div>
                                            <div className='bottom-part-left-percent'>34%</div>
                                        </div>
                                        <div className='bottom-part-right'>
                                        vs last month
                                        </div>
                                    </div>
                                </div>
                                <div className='number-and-badge-right'>
                                    trend line
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Chart