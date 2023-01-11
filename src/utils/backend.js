import UserClient from './axios'
import Alert from "./alert"

class BACKEND {
  constructor(url) {
    this._API = UserClient();
  }

  send({
    type,
    to,
    payload,
    header={},
    cb,
    useAlert,
  }) {
    return this._API[type](to, ['get','delete'].includes(type)?header:payload, header).then(function (response) {
      if ([200, 201, 304].includes(response?.status)) {
        if (useAlert) {
          Alert({
            type: 'success',
            message: response?.data?.message,
            cb: _ => cb ? cb(response?.data) : ''
          })
        } else if (cb) cb(response?.data)

        return response?.data
      } else {
        if (useAlert) {
          Alert({
            type: 'error',
            message: response?.data?.message
          })
        }
        return response?.data
      }
    }).catch(function (e) {
      if(e.name === "AbortError"){
				console.log("Axios terminated request")
			}
     else console.error(e, e?.name);
      const err = "error"
      const message = e?.message || e?.[err] || "Something went wrong";
      if (useAlert) {
        Alert({
          type: err,
          message
        })
      }
      return e
    })
  }

  getUser() {

    return this._API.get('/user').then(function (response) {
      if (response.status === 200) {
        return response.data
      } else {
        return false
      }
    }).catch(function (error) {
      return false
    })
  }

}

export default BACKEND;