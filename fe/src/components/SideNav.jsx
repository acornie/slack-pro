import { useState, useEffect, useRef } from "react";
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Avatar, Box, Button, Center, CloseButton, Flex, HStack, Popover, Spinner, Text, VStack, Image, background } from "@chakra-ui/react";
import { FaBell, FaHome, FaUser, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketProvider";
import { METHOD, REQUEST } from "../constants/chat";
// import { flushCompileCache } from "module";

const SideNav = () => {
    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);
    const { socket, actives, setactives } = useContext(SocketContext);

    const [active, setactive] = useState("home");
    const [logout, setlogout] = useState(false);

    useEffect(() => {
        if (auth?._id) {
            console.log(actives)
            if (socket) socket.emit(REQUEST.AUTH + "_" + METHOD.UPDATE, { ...auth, status: actives });
        }
    }, [actives])

    const out = () => {
        localStorage.removeItem("token");
        navigate('/');
    }

    const handleLogOut = () => {
        setactives(0);
        out();
    }

    return (
        <>
            <Box className="SideNav" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} >
                <VStack color={"white"} gap={"10px"} >
                    <Box onClick={() => setactive('home')} display={"Flex"} flexDirection={"column"} alignItems={"center"} p={"3px"} bg={active == 'home' ? "gray" : ""} ><FaHome fontSize={"20px"} ></FaHome><Text color={"white"} fontSize={"15px"} >Home</Text></Box>
                    <Box onClick={() => setactive('bell')} display={"Flex"} flexDirection={"column"} alignItems={"center"} p={"3px"} bg={active == 'bell' ? "gray" : ""}><FaBell fontSize={"20px"}></FaBell><Text color={"white"} fontSize={"15px"} >Bell</Text></Box>
                    <Box onClick={() => setactive('user')} display={"Flex"} flexDirection={"column"} alignItems={"center"} p={"3px"} bg={active == 'user' ? "gray" : ""}><FaUser fontSize={"20px"}></FaUser><Text color={"white"} fontSize={"15px"} >User</Text></Box>
                </VStack>
                <VStack
                    _hover={{ bg: '#fff2' }} onMouseOver={() => setlogout(true)} onMouseLeave={() => setlogout(false)} position={"relative"}>
                    <Avatar w={"35px"} h={"35px"} textAlign={"center"} rounded={"50%"} src="http://localhost:3000/rabbit(2).gif"/>
                    <HStack position={"absolute"} w={"13px"} h={"13px"} bg={actives == 1 ? "green" : setactives == 0 ? "blue" : "red"} rounded={"50%"} border={"solid 2px rgba(80,30,80, 0.95);"} zIndex={99} left={"30px"} bottom={"0px"} ></HStack>

                    <HStack position={"absolute"} w={"13px"} h={"13px"} bg={actives == "sleep" ? "blue" : ""} rounded={"50%"} border={"solid 2px rgba(80,30,80, 0.95);"} zIndex={99} left={"30px"} bottom={"0px"} ></HStack>
                    <HStack position={"absolute"} w={"13px"} h={"13px"} rounded={"50%"} border={"solid 2px rgba(80,30,80, 0.95);"} zIndex={99} left={"30px"} bottom={"0px"}></HStack>
                    <VStack display={logout ? "flex" : "none"} w={"80px"} bg={"rgba(80,30,80, 0.95);"} position={"absolute"} left={"50px"} bottom={0} alignItems={"center"} textAlign={"center"} color={"white"} boxShadow={"2px 2px 2px 2px rgba(0,0,0,0,3)"} zIndex={5}>
                        <Box _hover={{ bg: 'green' }} w={"80px"} onClick={() => setactives(1)}>Action</Box>
                        <Box _hover={{ bg: 'blue' }} w={"80px"} onClick={() => setactives(0)}>Sleep</Box>
                        <Box _hover={{ bg: 'black' }} w={"80px"} onClick={() => handleLogOut()}>Log out</Box>
                    </VStack>
                </VStack>


            </Box>

        </>
    )
}

export default SideNav;