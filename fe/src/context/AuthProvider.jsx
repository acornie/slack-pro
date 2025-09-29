import { createContext, useState, useEffect, useMemo, Children } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';
// import toast from "../utils/toast";
import {toast} from "react-toastify";
export const AuthContext = createContext(null);

const AuthProvider = (props) => {
    const [ auth, setAuth ] = useState({
        email:"",
        _id:"",
        token:""
    })
    const navigate = useNavigate();
        // const [userData, setuserData] = useState({});
    let token = localStorage.getItem("token");
    const value = {
        auth, setAuth
    }

    useEffect ( () => {
            checkUser();
    }, [])
    
    const checkUser  = async () => {
        const storetoken=localStorage.getItem("token");
        // const [vr,token]=storetoken.split(" ");
        axios.defaults.headers.common["Authorization"] = storetoken;
        const response=await axios.get("http://localhost:8080/auth/verify");
        if(response.data.type=='success'){
            toast.success(response.data.message);
            setAuth({_id:response.data.data._id, email:response.data.data.email, token:storetoken, status: response.data.data.status});
            navigate('/HomePage');
        }else{
            toast.error(response.data.message);
            setAuth();
            localStorage.removeItem("token");
            // setuserData({});
        }
    }

    return(
        <AuthContext.Provider value={{...value, checkUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider