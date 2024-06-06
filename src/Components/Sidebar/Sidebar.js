import React from 'react'
import './Sidebar.css'

export default function Sidebar(props) {
  return (
    <nav>
        <ul>
            <li>{props.home}</li>
            <li>{props.about}</li>
            <li>{props.contact}</li>
            <li>{props.profile}</li>
        </ul>
    </nav>
  )
}
