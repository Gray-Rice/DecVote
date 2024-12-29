import React, {createContext, useState} from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        userEmail: null,
        userType: null,
        userStatus: null
    });

    //this will validate if a user exists in the db
    //will not set anything if the user dosent exist
    const signup = async (email, password) => {
        
            try{
                const response = await axios.post('/signup/user', {email, password})// gotta confirm the url
                /* res would be {userEmail: <>,userType: <>, userStatus: <boolean>}*/
                if(response.data.userStatus){
                setUser({
                    userEmail: response.data.userEmail,
                    userType: "User",
                    userStatus: response.data.userStatus
                })
                return true;
            }
                else{
                    return false;
                }
            }
            catch(err){
                console.log(err);
            }
       
        
    }

    const login = async (email, password, type) => {
        console.log(type);
        

        if(type == "User"){
            try{
                const response = await axios.post('/login/user', {email, password})// gotta confirm the url
                /* res would be {userEmail: <>,userType: <>, userStatus: <boolean>}*/
                
                if(response.status == 401){
                    return 0;
                }
                else if(response.status == 500){
                    return -1;
                }
                else if(response.status == 200){
                    setUser({
                        userEmail: response.data.userEmail,
                        userType: type,
                        userStatus: response.data.userStatus
                    })
                    return 1;
                }

                
                //dummy for testing
                // setUser({
                //     userEmail: "asdada@dasd.com",
                //     userType: "User",
                //     userStatus: true
                // })
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            try{
                const response = await axios.post('/login/admin', {email, password})// gotta confirm the url
                /* res would be {userEmail: <>,userType: <>, userStatus: <boolean>}*/
                
                if(response.status == 401){
                    return 0;
                }
                else if(response.status == 500){
                    return -1;
                }
                else if(response.status == 200){
                    setUser({
                        userEmail: response.data.userEmail,
                        userType: type,
                        userStatus: response.data.userStatus
                    })
                    return 1;
                }
                console.log("admin");
                // setUser({
                //     userEmail: "asdada@dasd.com",
                //     userType: "Admin",
                //     userStatus: true
                // })
            }
            catch(err){
                console.log(err);
            }
        }
        
    }

    const logout = () => {
        setUser({userEmail: null,
        userType: null,
        userStatus: null})
    }

    return (
        <AuthContext.Provider value = {{user, login, logout, signup}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;