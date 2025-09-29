import { Avatar, Button, Center, CloseButton, Flex, HStack, Popover, Spinner, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { FaBell, FaHome, FaUser, FaCaretDown,FaCaretRight, FaPlusSquare} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import ChannelHeader from "../components/ChannelHeader";
import CreateChannelModal from "../components/CreateChannelModal";
import DirectChannelModal from "../components/DirectChannelModal";
import Messages from "../components/Messages";
import { METHOD, REQUEST, STATUS } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import SlackHeader from "../components/SlackHeader";
import SideNav from "../components/SideNav";
import { AuthContext } from "../context/AuthProvider";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { socket , changeicon, actives} = useContext(SocketContext);
  // console.log(changeicon,"ddddddddddddddddddddddddddddd")
  const [channelId, setChannelId] = useState();
  const [messageId, setMessageId] = useState();
  const [channels, setChannels] = useState([]);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [showDirectChannelModal, setShowDirectChannelModal] = useState(false);
  const [diaprop, setdiaprop] = useState('none');
  const [diadprop, setdiadprop] = useState('none');
  const { auth } = useContext(AuthContext);
  const directname = [];

  const channel = useMemo(
    () => {
      const channel = channels.find(channel => channel._id == channelId);
      if (!channel && channels.length > 0) {
        navigate(`/HomePage?channel=${channels[0]._id}`)
      }
      return channel;
    },
    [channels, channelId]
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setChannelId(params.get('channel'));
    setMessageId(params.get('message'));
  }, [location]);

  const onCreateChannel = (status, data) => {
    if (status == STATUS.ON) {
    socket.emit(`${REQUEST.CHANNEL}_${METHOD.READ}`);
    }
  }

  const onReadChannels = (status, data) => {
    if (status == STATUS.ON) {
      setChannels(data);
    }
  }

  const onUpdateChannel = (status, data) => {
    if (status == STATUS.ON) {
      setChannels((prev) => prev.map(channel => channel._id == data._id ? data : channel));
    }
  }

  const onDeleteChannel = (status, data) => {
    if (status == STATUS.ON) {
      console.log(data);
      setChannels((prev) => prev.filter(channel => channel._id != data.id));
    }
  }


  useEffect(() => {
    socket.emit(`${REQUEST.CHANNEL}_${METHOD.READ}`);
    socket.on(`${REQUEST.CHANNEL}_${METHOD.CREATE}`, onCreateChannel);
    socket.on(`${REQUEST.CHANNEL}_${METHOD.READ}`, onReadChannels);
    socket.on(`${REQUEST.CHANNEL}_${METHOD.UPDATE}`, onUpdateChannel);
    socket.on(`${REQUEST.CHANNEL}_${METHOD.DELETE}`, onDeleteChannel);
    return () => {
      socket.removeListener(`${REQUEST.CHANNEL}_${METHOD.CREATE}`, onCreateChannel);
      socket.removeListener(`${REQUEST.CHANNEL}_${METHOD.READ}`, onReadChannels);
      socket.removeListener(`${REQUEST.CHANNEL}_${METHOD.UPDATE}`, onUpdateChannel);
      socket.removeListener(`${REQUEST.CHANNEL}_${METHOD.DELETE}`, onDeleteChannel);
    }
  }, []);

  return (
    <>
      <Flex h='100vh' direction='column'>
        <SlackHeader />
        <Flex flex='1 1 0' templatecolumns='repeat(5, minmax(0, 1fr))'>
          <SideNav />
          <VStack
            w={{ base: '240px', lg: '320px' }}
            p={4}
            align='stretch'
            gap={1}
            bg='rgba(80, 30, 80,0.95)'
            overflowY='auto'
            className="channelList"
            fontSize={"20px"}
          >
            <HStack color={"white"}>
              {diaprop == 'none'?
              <FaCaretRight onClick={() => setdiaprop('')}></FaCaretRight>
              :<FaCaretDown onClick={() => setdiaprop('none')}></FaCaretDown>}
              <Text >
                Channels
              </Text>
            </HStack>

            {channels.map((channel, i) => (
              channel.types == "group" && 
              <Flex
                display={diaprop}
                key={channel._id}
                p={1}
                justify='space-between'
                align='center'
                rounded={4}
                cursor='pointer'
                _hover={{ bg: '#fff2' }}
                {...(channelId == channel._id && { bg: '#0002' })}
                onClick={() => navigate(`/HomePage?channel=${channel._id}`)}
              >
                <HStack position={"relative"}>
                  {/* <Avatar w={"35px"} h={"35px"} textAlign={"center"} rounded={"50%"} ></Avatar>
                  <HStack position={"absolute"} w={"13px"} h={"13px"} bg={"green"} rounded={"50%"} border={"solid 2px rgba(80,30,80, 0.95);"} zIndex={99} left={"12px"} bottom={"0px"} ></HStack> */}
                  <Text color={"white"} fontSize={"16px"}>
                  {channel.name}
                </Text>
                </HStack>
                
              </Flex>
            ))}
            <HStack color={"white"} _hover={{ bg: '#fff2' }} justify={"center"}>
              <FaPlusSquare></FaPlusSquare>
              <Button size="ms" onClick={() => setShowCreateChannelModal(true)} className="createchannel" background={"none"} _hover={{ bg: 'none' }}>
                Add Channel
            </Button>
            </HStack>
            
            <HStack color={"white"}>
              {diadprop == 'none'?
              <FaCaretRight onClick={() => setdiadprop('')}></FaCaretRight>
              :<FaCaretDown onClick={() => setdiadprop('none')}></FaCaretDown>}
              <Text >
                Directions
              </Text>
              
            </HStack>
                {channels.map(channel=>channel.types=='invite' && channel.members[0]._id == auth._id ? directname.push(channel.members[1]._id):directname.push(channel.members[0]._id))}
            {channels.map((channel, i) => {
              const rrr=channel.members[0]._id == auth._id ? channel.members[1] :channel.members[0];
              // console.log(`http://localhost:8080/avatar/${rrr.avatar}`)
              return(
              channel.types == "invite"&&
              <Flex
                display={diadprop}
                key={channel._id}
                p={1}
                justify='space-between'
                align='center'
                rounded={4}
                cursor='pointer'
                _hover={{ bg: '#fff2' }}
                {...(channelId == channel._id && { bg: '#0002' })}
                onClick={() => navigate(`/HomePage?channel=${channel._id}`)}
              >
                <HStack position={"relative"}>
                  <Avatar w={"35px"} h={"35px"} textAlign={"center"} rounded={"50%"} src={`http://localhost:8080/avatar/${rrr.avatar}`}></Avatar>
                  <HStack position={"absolute"} w={"13px"} h={"13px"} bg={rrr.status} rounded={"50%"} border={"solid 2px rgba(80,30,80, 0.95);"} zIndex={99} left={"12px"} bottom={"0px"} ></HStack>
                  <Text color={"white"} fontSize={"16px"}>
                  {rrr.email}
                </Text>
                </HStack>
              </Flex>
            )})}
            <HStack color={"white"} _hover={{ bg: '#fff2' }} justify={"center"}>
              <FaPlusSquare></FaPlusSquare>
              <Button size="ms" onClick={() => setShowDirectChannelModal(true)} className="createchannel" background={"none"} _hover={{ bg: 'none' }}>
             Invite Messaegs
            </Button>
            </HStack>
          </VStack>
          {channel ? (
            <VStack flexGrow={1} align="stretch">
              <ChannelHeader
                borderBottom='1px solid #ccc'
                channel={channel}
              />
             {(changeicon == 'message'|| changeicon == 'pin') &&  <HStack flex='1 1 0'>
                <Messages
                  flexGrow={1}
                  h='full'
                  channelId={channelId}
                  messageId={null}
                />
                {messageId && (
                  <VStack w={{ base: '50%', lg: '35%' }} h='full' align='stretch' borderLeft='1px solid #ccc'>
                    <HStack px={4} justify='space-between'>
                      <Text>
                        Thread
                      </Text>
                      <CloseButton
                        onClick={() => navigate(`/HomePage?channel=${channelId}`)}
                      />
                    </HStack>
                    <Messages
                      h='full'
                      channelId={channelId}
                      messageId={messageId}
                    />
                  </VStack>
                )}
              </HStack>}
                {/* {changeicon == 'file' && <File/>} */}
            </VStack>
          ) : (
            <Flex flexGrow={1} h='full' direction='column' justify='center' align='center' gap={2}>
              <VStack>
                <Spinner />
                <Text fontSize="sm">
                  {/* Loading... */}
                </Text>
              </VStack>
            </Flex>
          )}
        </Flex>
      </Flex>
      <CreateChannelModal
        isOpen={showCreateChannelModal}
        onClose={() => setShowCreateChannelModal(false)}
        setChannels={setChannels}
      />
      <DirectChannelModal
        isOpen={showDirectChannelModal}
        onClose={() => setShowDirectChannelModal(false)}
        setChannels={setChannels}
        directs = {directname}
      />
    </>
  );
};

export default HomePage;

