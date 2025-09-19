import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import useUser from "../api/useUsers";
import Message from "../components/Message";
import SendMessage from "../components/SendMessage";
import { METHOD, REQUEST, STATUS } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import { formatDate } from "../utils";

const Messages = ({ channelId, messageId, isPined, ...props }) => {
  const { socket, changeicon, setchangeicon } = useContext(SocketContext);
  const { users } = useUser();
  const ref = useRef();
  const [isBottom, setIsBottom] = useState(true);
  const [messages, setMessages] = useState([]);
  const timerRef = useRef({});
  const [typingList, setTypingList] = useState([]);

  const handleScroll = (e) => {
    setIsBottom(e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 10);
  }

  useEffect(() => {
    if (isBottom) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  const onCreateMessage = (status, data) => {
    if (status == STATUS.ON) {
      if (data.channel == channelId && data.parent == messageId) {
        setMessages(prev => [...prev, data]);
      }
    }
  }

  const onReadMessages = (status, data) => {
    if (status == STATUS.ON) {
      if (data.channel == channelId && data.parent == messageId) {
        setMessages(data.messages);
      }
    }
  }

  const onUpdateMessage = (status, data) => {
    if (status == STATUS.ON) {
      console.log(data);
      setMessages((prev) => prev.map(message => message._id == data._id ? data : message));                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }
  }

  const onDeleteMessage = (status, data) => {
    if (status == STATUS.ON) {
      setMessages((prev) => prev.filter(message => message._id != data.id));
    }
  }

  const onTyping = (status, data) => {
    if (data.channelId == channelId && data.messageId == messageId) {
      const removeUser = () => {
        setTypingList(prev => prev.filter(user => user != data.user));
      }
      setTypingList((prev) => {
        if (prev.some(user => user == data.user)) {
          clearTimeout(timerRef.current[data.user]);
          timerRef.current[data.user] = setTimeout(removeUser, 4000);
          return prev;
        }
        timerRef.current[data.user] = setTimeout(removeUser, 4000);
        return [...prev, data.user];
      });
    }
  }

  useEffect(() => {
    socket.on(`${REQUEST.MESSAGE}_${METHOD.UPDATE}`, onUpdateMessage);
    socket.on(`${REQUEST.MESSAGE}_${METHOD.DELETE}`, onDeleteMessage);
    return () => {
      socket.removeListener(`${REQUEST.MESSAGE}_${METHOD.UPDATE}`, onUpdateMessage);
      socket.removeListener(`${REQUEST.MESSAGE}_${METHOD.DELETE}`, onDeleteMessage);
    }
  }, []);

  useEffect(() => {
    socket.on(`${REQUEST.MESSAGE}_${METHOD.CREATE}`, onCreateMessage);
    socket.on(`${REQUEST.MESSAGE}_${METHOD.READ}`, onReadMessages);
    socket.on(REQUEST.TYPING, onTyping);
    if (channelId) {
      socket.emit(
        `${REQUEST.MESSAGE}_${METHOD.READ}`,
        {
          channel: channelId,
          parent: messageId,
        }
      );
    }
    return () => {
      socket.removeListener(`${REQUEST.MESSAGE}_${METHOD.CREATE}`, onCreateMessage);
      socket.removeListener(`${REQUEST.MESSAGE}_${METHOD.READ}`, onReadMessages);
      socket.removeListener(REQUEST.TYPING, onTyping);
    }
  }, [channelId, messageId]);

  return (
    <VStack align='stretch' {...props}>
      <VStack
        ref={ref}
        onScroll={handleScroll}
        flex='1 1 0'
        h='fit-content'
        p={4}
        align='stretch'
        overflowY='auto'
      >

        {messages.map((message, index) => changeicon == 'message' ? (
          <Message
            showDate={index > 0 && formatDate(messages[index - 1].createdAt) != formatDate(message.createdAt)}
            key={message._id}
            channelId={channelId}
            messageId={messageId}
            message={message}
            isPined={message.isPined}
          />
        ): 
        message.isPined && (
          <Message
            showDate={index > 0 && formatDate(messages[index - 1].createdAt) != formatDate(message.createdAt)}
            key={message._id}
            channelId={channelId}
            messageId={messageId}
            message={message}
            isPined={message.isPined}
          />
        )
      )}
      </VStack>
      <Box h={3} px={4}>
        {typingList.length > 0 && (
          <Text fontSize="sm" display={'flex'} justifyContent={'center'}>
            {typingList.map(userId => {
              const user = users.find(user => user._id == userId);
              return user?.username;
            }).join(', ')}
            {" "}is typing...
          </Text>
        )}
      </Box>
      <SendMessage channelId={channelId} messageId={messageId} />
    </VStack>
  )
}

export default Messages;
