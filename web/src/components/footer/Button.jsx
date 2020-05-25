import React from 'react'
import buttonStyles from './styles/button.module.css'

const Button = ({text, mailTo, color, href}) => {
  const mailToText = `mailTo:${mailTo}`
  const hrefLink = mailTo ? mailToText : href
  return (
    <a href={hrefLink} target='_blank' className={buttonStyles[color]}>
      {text}
    </a>
  )
}

export default Button
