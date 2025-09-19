import { useState, useEffect , useRef , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import toast from "../utils/toast";
import {toast} from "react-toastify";
import { Button, HStack, Input, Stack, Text, VStack, Image, Avatar, Center } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthProvider";
const SignIn = () => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState({});
    const {auth, setAuth, checkUser} = useContext(AuthContext)
    // const [ auth, setAuth ] = useState({
    //     email:"",
    //     _id:"",
    //     token:""
    // })
    const InputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserData({ ...userData, [name]: value });
    }

    const [avatar, setAvatar] = useState({
            path: "http://localhost:3000/rabbit(9).gif", file: null
        });
    
            const getfile = () => {
            fileref.current.click();
        }
        const fileref = useRef(null);
    
        const setavatar = (e) => {
            const file = e.target.files[0];
            const fileload = new FileReader();
            fileload.onload = (e) => {
                setAvatar({ path: e.target.result, file });
            }
            fileload.readAsDataURL(file);
        }

    const LogIn = async () => {
        if (!userData.email || !userData.password) {
            toast.warning('Input empty');
        }
        else {
            axios.post("http://localhost:8080/auth/signin", userData)
                .then((res) => {
                    if (res.data.status === 'success') {
                        toast.success(res.data.msg);
                        localStorage.setItem('token', res.data.token);
                        // navigate("/HomePage")
                        checkUser();
                    }
                    else {
                        toast.error(res.data.msg);
                    }
                })


        }
    }


    return (
        <>
            <div className="container">
                <div className="modal">
                    <div className="modal-header">
                        <span>Welcome. Please Login</span>
                    </div>
                    <div className="modal-content">
                        <HStack w={"100px"} onClick={getfile} pt={"15px"} >
                            <Avatar src={avatar.path} w={"full"} h={"full"}> </Avatar>
                        </HStack>
                        <input type="text" name="email" onChange={InputChange} id="" placeholder="email" />
                        <input type="password" name="password" onChange={InputChange} id="" placeholder="password" />
                        <input type="button" name="submit" id="" value="LogIn" onClick={LogIn} />

                    </div>
                    <div className="modal-footer">
                        <button onClick={() => navigate('/register')}>Create an account</button>
                    </div>
                </div>
            </div>
            <Input type="file" ref={fileref} display={"none"} onChange={(e) => { setavatar(e) }} />
        </>
    )

}
export default SignIn;