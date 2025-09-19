import { Box, Button, Flex, Textarea, Input, VStack} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { METHOD, REQUEST } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import useUser from "../api/useUsers";

const SendMessage = ({ isEditing, channelId, messageId, value, onClose }) => {
    const { socket } = useContext(SocketContext);
    const [message, setMessage] = useState(value);
    const [mention, setmention] = useState([])
    const {users} = useUser() ;
    const [showemailmadal, setshowemailmadal] = useState('none');
    const isTyping = useRef(false);
    const handleSend = () => {
        if (isEditing) {
            socket.emit(
                `${REQUEST.MESSAGE}_${METHOD.UPDATE}`,
                {
                    id: messageId,
                    message: { message },
                }
            );
        } else {
            socket.emit(
                `${REQUEST.MESSAGE}_${METHOD.CREATE}`,
                {
                    channel: channelId,
                    parent: messageId,
                    message,
                }
            );
            setMessage('');
        }
        setmention([]);
        onClose?.();
    }

    const handleTyping = () => {
        if (isTyping.current)
            return;

        isTyping.current = true;

        socket.emit(REQUEST.TYPING, {
            channelId,
            messageId,
        });

        setTimeout(() => {
            isTyping.current = false;
        }, 3000);
    }
    const selectted = (e) => {
        setMessage(message + e );
        setshowemailmadal('none');
    }

    return (
        <Flex flexDirection={'column'}>
            <Flex p={4} gap={4}>
            <Textarea
                value={message}
                minH={16}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == 'Enter' && !(e.shiftKey || e.ctrlKey)) {
                        handleSend();
                        e.preventDefault();
                    }
                    if (e.key == 'Escape') {
                        onClose?.();
                    }
                    if (e.key == '@'){
                        setshowemailmadal('flex');
                       
                    }
                    else {
                        setshowemailmadal('none');
                        showemailmadal('none');
                       
                    }
                    handleTyping();
                }}

                
            />
            <Button flex='none' onClick={handleSend}>
                <FaPaperPlane />
            </Button>
            <Flex display={showemailmadal} position={'absolute'} overflow={'auto'} height={'120px'} bottom={'113px'} bg={'rgba(147, 157, 165, 0.6);'} direction={'column'} 
                cursor={'pointer'} 
               
            >
                {users.map((user, i) => (
                    <Box key={i}  _hover={{ bg: 'rgba(83, 204, 103, 0.7)' }} onClick={() => selectted(user.username)}>{user.username}</Box>
                ))}
            </Flex>
            </Flex>
            <Input type="file" w={"250px"} ></Input>
        </Flex>
        
    )
}

export default SendMessage;
