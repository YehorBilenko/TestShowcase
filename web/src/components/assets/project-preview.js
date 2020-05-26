import React from 'react'
import {cn, buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import BlockText from '../blocks/block-text'
import Button from '../footer/Button.jsx'

import styles from './styles/project-preview.module.css'
import {responsiveTitle3} from '../typography.module.css'

function ProjectPreview (props) {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
      <Button color='yellow' text='Asset store' href={props.linkTo} />
    </div>
  )
}

export default ProjectPreview
