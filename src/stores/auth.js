import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const apiKey = 'AIzaSyAROBeVOybpeg8XmTPd_MSSU5O40N60uks';

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: '',
    expiresIn: '',
  });

  const err = ref('');

  const signup = async (payload) => {
    try {
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,{
        ...payload,
        returnSecureToken: true,
      });
      userInfo.value = {
        token: response.data.idToken ,
        email: response.data.email ,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn ,
      }
      console.log(response.data)
    } catch(error) {
      console.log(error.response)
      switch (error.response.data.error.message) {
        case 'EMAIL_EXISTS':
          err.value = 'Email exists'
          break;
        case 'OPERATION_NOT_ALLOWED':
          err.value = 'Operation not allowed'
          break;
        case 'EMAIL_NOT_FOUND':
          err.value = 'Email not found'
          break;
        case 'INVALID_PASSWORD':
          err.value = 'Invalid password'
          break;
        default:
          err.value = 'Error'
          break;
      }
    }
  }
  
 


  return { signup, userInfo, err}
})
