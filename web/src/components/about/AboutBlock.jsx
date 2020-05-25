import React from 'react'
import BlockItem from './BlockItem.jsx'
import {centerBlocks} from './styles/about.module.css'

const AboutBlock = ({aboutBlocks}) => (
  <div className={centerBlocks}>
    {aboutBlocks.map(block => (
      <BlockItem {...block} />
    ))}
  </div>
)

export default AboutBlock
