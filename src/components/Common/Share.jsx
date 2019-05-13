import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function Share({ classes, ...rest }) {
  const [copied, setCopied] = useState(false)

  const handleOnCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className={classes.root}>
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => handleOnCopy()}
      >
        <button type="button" className={classes.button}>
          {!copied ? (
            <span>
              Share this link
              <FontAwesomeIcon icon={faShare} className={classes.icon} />
            </span>
          ) : (
            <span>Link copied to clipboard!</span>
          )}
        </button>
      </CopyToClipboard>
    </div>
  )
}
const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  button: {
    color: '#FFF',
    fontSize: '1rem',
  },
  icon: {
    marginLeft: 8,
  },
  // notification fadeOut classes
}
export default withStyles(styles)(Share)
