import React from 'react'
import './topbar.css'
import {
    NotificationsNone
} from '@mui/icons'
 

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>|ARTBIT|admin</span>
            </div>
            <div className='topRight'>
                <div className="toparIcons">
                   <NotificationsNone/>
                </div>
            </div>
        </div>
    </div>
  ) 
}
