import classes from './StatusIcon.module.css'

import { BsCheckLg } from 'react-icons/bs'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoLockClosed } from 'react-icons/io5'

const StatusIcon = ({ children, cssClass }) => {
  return <div className={`${classes.root} ${cssClass || ''}`}>{children}</div>
}

export const Green = () => (
  <StatusIcon>
    <span className={classes.green}>
      <BsCheckLg />
    </span>
  </StatusIcon>
)
export const Blue = () => (
  <StatusIcon cssClass={classes.blue}>
    <span>
      <IoMdArrowRoundForward />
    </span>
  </StatusIcon>
)
export const Gray = () => (
  <StatusIcon>
    <span>
      <IoLockClosed />
    </span>
  </StatusIcon>
)
