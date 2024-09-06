import React, { useState, useEffect } from 'react'

export default function Backend(props) {
  const url = `${props.url}/api/v1/examples.json`
  const [message, setMessage] = useState('')
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
        setMessage(data.message)
        setConnected(true)
      } catch (error) {
        setMessage('No message received, please check the backend server is running')
        setConnected(false)
        console.error('Error fetching message:', error)
      }
    }

    fetchMessage()
  }, [props.url])

  return (
    <>
      {props.url !== undefined &&
        <>
          <h1>
            Backend: {connected ?
              <span className="ls_ui-connected">Connected</span>
            :
              <span className="ls_ui-not-connected">Not Connected</span>
            }
          </h1>

          <p>
            The following message is from the backend API ({url}):<br />
            {message}
          </p>
        </>
      }
    </>
  )
}