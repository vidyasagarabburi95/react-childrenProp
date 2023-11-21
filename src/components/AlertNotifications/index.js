// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="container">
        <AiFillCheckCircle className="icon suucees " />
        <div>
          <h1 className="suucees">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
  )

  const renderErrorsNotification = () => (
    <Notification>
      <div className="container">
        <RiErrorWarningFill className="icon error " />
        <div>
          <h1 className="error">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notification>
  )
  const renderWarningNotification = () => (
    <Notification>
      <div className="container">
        <MdWarning className="icon warning" />
        <div>
          <h1 className="warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </div>
    </Notification>
  )
  const renderInfoNotification = () => (
    <Notification>
      <div className="container">
        <MdInfo className="icon info " />
        <div>
          <h1 className="info">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  )
  return (
    <div className="bg-container">
      <h1>Alert Notifications</h1>
      {renderSuccessNotification()}
      {renderErrorsNotification()}
      {renderWarningNotification()}
      {renderInfoNotification()}
    </div>
  )
}

export default AlertNotifications
