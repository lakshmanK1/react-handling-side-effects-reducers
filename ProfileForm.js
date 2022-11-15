import classes from './ProfileForm.module.css';
import React,{useRef,useContext} from 'react';
import { AuthContext } from '../../Store/Context';

const ProfileForm = () => {
  const passwordRef = useRef(); 
  const{token} = useContext(AuthContext);

  const submitHandlerForm = (e) => {
    e.preventDefault();

    const enteredPassword = passwordRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDJQwwNm_Vtu8t8C-DqWPOADSu9HFbpXng',{
      method:"POST",
      body:JSON.stringify({
        idToken:token,
        password:enteredPassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then((res)=>{

    });
   }
  return (
    <form className={classes.form} onSubmit={submitHandlerForm}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'minLength='7' ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
