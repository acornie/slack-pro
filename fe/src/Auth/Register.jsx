
import { useState, useEffect , useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "../utils/toast";
import { Button, HStack, Input, Stack, Text, VStack, Image, Avatar, Center } from "@chakra-ui/react";
const SignUp = () => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState({});
    const InputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData ({...userData, [name]:value});
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

    const Register = async () => {
        
        if(!userData.username||!userData.email||!userData.password||!userData.confirm){
            toast.warning('Input empty');
         } 
         
        
          const result = await axios.post("http://localhost:8080/auth/signup", userData)
            if(result.data.status == 'success') {
                toast.success(result.data.status);
                navigate("/");
            }
            else toast.error(result.data.status);

       
    }
    



    return (
        <>
            <div className="container">
                <div className="modal">
                    <div className="modal-header">
                        <div className="d-flex">
                            <span>Welcome. Please SignUp</span>
                        </div>
                        
                    </div>
                    <div className="modal-content">
                        <HStack w={"100px"} onClick={getfile} pt={"15px"} >
                            <Avatar src={avatar.path} w={"full"} h={"full"}> </Avatar>
                        </HStack>
                        <input type="text" name="username" onChange={InputChange} id="" placeholder="username"/>
                        <input type="text" name="email" onChange={InputChange} id="" placeholder="email"/>
                        <input type="password" name="password" onChange={InputChange} id="" placeholder="password"/>
                        <input type="password" name="confirm" onChange={InputChange} id="" placeholder="confirm"/>
                        <input type="button" name="submit" id="" onClick={Register} value="Register" />
                    </div>
                    <div className="modal-footer ">
                        <button onClick={()=> navigate('/')}>Sign in</button>
                        
                    </div>
                </div>
            </div>
            <Input type="file" ref={fileref} display={"none"} onChange={(e) => { setavatar(e) }} />
        </>
    )
}

export default SignUp;