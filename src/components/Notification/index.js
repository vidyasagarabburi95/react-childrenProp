// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="children">
      <div>{children}</div>
      <GrFormClose className="x-icon" />
    </div>
  )
}
export default Notification
