import { Avatar, Badge, Box, Flex, flexbox, Grid, HStack, Popover, PopoverContent, PopoverTrigger, Text, VStack } from "@chakra-ui/react";
import { useContext, useMemo, useState, useEffect } from "react";
import { FaEdit, FaRegCommentDots, FaRegSmile, FaRegTrashAlt, FaPinterestP, FaDownload } from "react-icons/fa";
import { AiFillPushpin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../api/useUsers";
import { METHOD, REQUEST } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import { AuthContext } from "../context/AuthProvider";
import { formatDate, formatTime } from "../utils";
import Emoticon from "./Emoticon";
import Emoticons from "./Emoticons";
import SendMessage from "./SendMessage";

const Message = ({ showDate, channelId, messageId, message, isPined, files }) => {
  const rendermark = message.message.split(" ");
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const { users } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isPin, setIsPin] = useState(isPined);
  const sender = useMemo(() => users.find(user => user._id == message.sender), [users, message]);
  const { auth } = useContext(AuthContext);

  const emoticons = useMemo(() => {
    return message.emoticons.reduce((prev, emoticon) => {
      const group = prev.some(prev => prev.code == emoticon.code);
      if (!group) {
        return [...prev, { code: emoticon.code, users: [emoticon.creator] }];
      }
      return prev.map(group => {
        if (group.code == emoticon.code) {
          return {
            code: emoticon.code,
            users: [...group.users, emoticon.creator],
          }
        }
        return group;
      });
    }, []);
  }, [message]);

  const handleDelete = () => {
    socket.emit(`${REQUEST.MESSAGE}_${METHOD.DELETE}`,
      { id: message._id });
  }

  const handlepinsend = (boolean) => {
    setIsPin(boolean)
    socket.emit(`${REQUEST.MESSAGE}_${METHOD.UPDATE}`,
      {
        id: message._id,
        message: message,
        isPined: boolean,
      })
  }
  const handleEmoticon = (id) => {
    socket.emit(REQUEST.EMOTICON, {
      messageId: message._id,
      emoticonId: id,
    });
  }
  // console.log(rendermark)
  return (
    <>
      {showDate && (
        <Flex justify='center' borderBottom='1px solid #ddd'>
          <Badge mb={-2} variant="outline" bg='white' >
            {formatDate(message.createdAt)}
          </Badge>
        </Flex>
      )}
      <Popover placement="top">
        <PopoverTrigger>
          <Flex justify={"left"} >

            {/* //sender?.username == auth.username ? "left" : "right" */}
            <Flex key={message._id} p={2} gap={4} w={'100%'} rounded={"10px"} bg={sender?.email == auth.email ? "rgba(205, 218, 208, 0.5)" : "rgba(170, 214, 219, 0.5)"} >
              {users.map(user => user._id == auth._id &&
                <Avatar size="sm" src={sender?.email == user.email ? `http://localhost:8080/avatar/${auth.avatar}` : `http://localhost:8080/avatar/${sender?.avatar}`} />)}
              <VStack flexGrow={1} align='stretch' >
                <Flex direction='column'>
                  <Flex gap={4}>
                    <Text fontWeight='bold' fontSize='sm' color={"black"}>
                      {sender?.username}
                    </Text>
                    <Text fontSize="sm">
                      {formatTime(message.createdAt)}
                    </Text>
                    <HStack>
                      {

                      }
                    </HStack>
                  </Flex>
                  {isEditing ? (
                    <SendMessage
                      isEditing
                      value={message.message}
                      messageId={message._id}
                      files={message.files}
                      onClose={() => setIsEditing(false)}
                    />

                  ) : (
                    <Flex justifyContent={'left'}>
                      <VStack>
                        <HStack>
                          {
                            files.map((val, kkey) => {
                              return (
                                <a href={"http://localhost:8080/file/" + val.filename}>
                                  <Box bg={"#97948aff"} rounded={5} key={kkey} display={'flex'}
                                    _hover={'#841ed8ff'} alignItems={'center'} pr={"10px"} textDecoration={'underline'} pl={'10px'}>
                                    {val.originalname}
                                    <Box pl={'20px'}>
                                      <FaDownload></FaDownload>
                                    </Box>
                                  </Box>

                                </a>
                              )
                            })
                          }
                        </HStack>
                        <HStack>
                          {
                            rendermark.map((index, key) => {
                              if (index[0] == '@') {
                                return <Text fontSize="sm" key={key} color={'red'} > {index}  </Text>
                              } else {
                                return <Text fontSize="sm"> {index} </Text>
                              }
                            }
                            )
                          }
                        </HStack>
                      </VStack>

                    </Flex>
                  )}



                  {message.childCount > 0 && (
                    <Link
                      to={`/HomePage?channel=${channelId}&message=${message._id}`}
                    >
                      <Text
                        fontSize="sm"
                        color='blue.400'
                        _hover={{ textDecoration: 'underline' }}

                      >
                        {message.childCount} replies
                      </Text>
                    </Link>
                  )}
                  <HStack>
                    {emoticons.map((emoticon, key) => (
                      <Box key={key} cursor='pointer'
                        onClick={() => handleEmoticon(emoticon.code)}
                      >
                        <Flex align='center' gap={0.5}>
                          <Emoticon id={emoticon.code} />
                          <Text fontSize='xs' color='gray.600'>
                            {emoticon.users.length}
                          </Text>
                        </Flex>
                      </Box>
                    ))}
                  </HStack>
                </Flex>
              </VStack>

            </Flex>
          </Flex>
        </PopoverTrigger >
        <PopoverContent w='unset'>
          <HStack p={2} gap={2}>
            <Popover>
              <PopoverTrigger>
                <Box cursor='pointer'>
                  <FaRegSmile />
                </Box>
              </PopoverTrigger>
              <PopoverContent w='unset' p={2}>
                <Grid gap={1} templateColumns='repeat(8, minmax(0, 1fr))'>
                  <Emoticons onSelect={handleEmoticon} />
                </Grid>
              </PopoverContent>
            </Popover>
            {messageId == null && (
              <Box cursor='pointer' onClick={() => navigate(`/HomePage?channel=${channelId}&message=${message._id}`)}>
                <FaRegCommentDots />
              </Box>
            )}
            <Box cursor='pointer' onClick={() => setIsEditing(true)} >
              <FaEdit />
            </Box>
            <Box cursor='pointer' onClick={() => isPin ? handlepinsend(false) : handlepinsend(true)} >
              {isPin ? <AiFillPushpin color="red" /> : <AiFillPushpin />}

            </Box>
            <Box cursor='pointer' onClick={handleDelete} >
              <FaRegTrashAlt color="red" />
            </Box>
          </HStack>
        </PopoverContent>
      </Popover >
    </>
  )
}

export default Message;
