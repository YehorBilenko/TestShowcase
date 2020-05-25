import React from 'react'
import {blockItem} from './styles/about.module.css'

const BlockItem = ({title, info}) => (
  <div className={blockItem}>
    <h2>{title}</h2>
    <p>{info}</p>
  </div>
)

export default BlockItem
