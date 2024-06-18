import React from 'react'

import "./Settings.scss";

export default function Settings() {
  return (
    <>
        <div className='settings'>
            <button className='settings_main btt link'><span class="material-symbols-rounded f-w">settings</span></button>
            <nav className='settings_nav'>
                <button className='settings_btt btt link active'><span class="material-symbols-rounded f-w">settings</span></button>
                <button className='settings_btt btt link'><span class="material-symbols-rounded f-w">settings</span></button>
                <button className='settings_btt btt link'><span class="material-symbols-rounded f-w">settings</span></button>
            </nav>
        </div>
    </>
  )
}
