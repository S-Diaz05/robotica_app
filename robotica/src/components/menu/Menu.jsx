import React from 'react'
import {Link} from 'react-router-dom'

export default function menu() {
  return (
    <div>
        <nav >
            <ul >

            <li> <Link to={"/home"}> home</Link>          </li>
            <li> <Link to={"/about"}> about</Link>          </li>

            </ul>
        </nav>
    </div>
  )
}
