import React from 'react'

import "./Settings.scss";

export default function Settings() {
  return (
    <>
        <div className='settings'>
            <button className='settings_main btt link'><span class="material-symbols-rounded f-w">settings</span></button>
            <nav className='settings_nav'>
                <button className='toggle_icon'>
                  <span class="material-symbols-rounded f-w">text_fields</span>
                  <div className='toggle active'></div>
                </button>
                <button className='toggle_icon'>
                  <span class="material-symbols-rounded f-w">contrast</span>
                  <div className='toggle'></div>
                </button>
                <button className='toggle_icon'>
                  <span class="material-symbols-rounded f-w">deblur</span>
                  <div className='toggle'></div>
                </button>
            </nav>
        </div>
    </>
  )
}
