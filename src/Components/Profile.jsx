import React from 'react';

import './Profile.css'

export const Profile = () => {
    return (
        <div className="profile__card">
              <div className="img__profile">
                <img src="../images/profile.png" alt="profile" /> 
            </div>
 
        <div className="user__name">
                <input 
         className="input" type="text" placeholder="Name" 
          />
            </div>
            <div className="user__email">
                <input 
         className="input" type="text" placeholder="Email" name="s" 
          />
            </div>
            <div>
            <button className="signin__button" type="button">Sign in</button>
            </div>
        <hr></hr>
            <div>
            
            <span className="profile__accountLink">Add another account</span>
        </div> 
        </div>
    )
}
