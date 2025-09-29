import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { METHOD, REQUEST } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import ChannelEditModal from "./ChannelEditModal";

const ChannelHeader = ({ channel, ...props }) => {
  const { socket, setchangeicon, changeicon } = useContext(SocketContext);
  const [showChannelEditModal, setShowChannelEditModal] = useState(false);
  const handleDeleteChannel = () => {
    socket.emit(`${REQUEST.CHANNEL}_${METHOD.DELETE}`, { id: channel._id });
  }


  return (
    <>
      <Flex p={4} justify='space-between' {...props}>
        <HStack>
          {channel.types == 'invite'?
          <Text fontWeight={'bold'}>
            User name : {channel.members[0].username}
          </Text>:
          <Text fontWeight={'bold'}>
            Channel name : {channel.name}
          </Text>
          }
          <Box cursor='pointer' onClick={() => setShowChannelEditModal(true)}>
            <FaEdit />
          </Box>
          <Box cursor='pointer' onClick={handleDeleteChannel}>
            <FaRegTrashAlt color="red" />
          </Box>
        </HStack>
        <Flex gap={2}>
          <Flex>
            {channel.members.filter((_, index) => index < 4).map(member => (
              <Box ml={-2} key={member._id}>
                <Avatar size="xs" />
              </Box>
            ))}
          </Flex>
          {channel.members.length > 4 && (
            <Text>
              +{channel.members.length - 4}
            </Text>
          )}
        </Flex>
      </Flex>
      <HStack padding={"16px"} gap={"20px"} fontWeight={"bold"}> 
        <Box cursor={'pointer'} borderBottom = {changeicon == "message"?"solid 2px black" : ""}onClick={ () => setchangeicon("message")}>Message</Box>
        <Box cursor={'pointer'} borderBottom = {changeicon == "pin"?"solid 2px black" : ""}onClick={ () => setchangeicon("pin")}>Pins</Box>
        <Box cursor={'pointer'} borderBottom = {changeicon == "file"?"solid 2px black" : ""}onClick={ () => setchangeicon("file")}>File</Box>
      </HStack>
      <ChannelEditModal
        key={channel._id}
        channel={channel}
        isOpen={showChannelEditModal}
        onClose={() => setShowChannelEditModal(false)}
      />
    </>
  )
}

export default ChannelHeader;
