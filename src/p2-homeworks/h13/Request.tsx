import React, { ChangeEvent, useState } from 'react';
import { RequestsAPI } from './RequestsAPI';

export const Request = () => {
  const [status, setStatus] = useState<boolean >(true)
  const [state, setState] = useState<any>()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(!status)
  }

  const onButtonClick = () => {
    RequestsAPI.statusPost(status)
      .then(resp => {
        setState(resp.data);
      } )
      .catch(err => {
        console.log(err.response.data.errorText, err.message)
        err.response ? setState(err.response.data.errorText) : setState(err.message)
        // setState(err.message)

      })
  }

  return <div>
    <span>homeworks 13</span>
    <div>
      <button onClick={onButtonClick}>Send</button>
    </div>
    <div>
      <input type="checkbox" id={"title"} name={"title"} checked={status} onChange={onChange}/>
      <label htmlFor="title">Title</label>
    </div>
    <div>
      {JSON.stringify(state)}
    </div>
  </div>
}


