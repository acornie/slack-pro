import { Box, Button, Checkbox, Flex, FormLabel, HStack, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import useUser from "../api/useUsers";
import { METHOD, REQUEST, STATUS } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import toast from "../utils/toast";

const ChannelEditModal = ({ channel, onClose, ...props }) => {
  const { users } = useUser();
  const { socket } = useContext(SocketContext);
  const [channelName, setChannelName] = useState(channel.name);
  const [selectedUsers, setSelectedUsers] = useState(channel.members.reduce((prev, user) => {
    prev[user._id] = true;
    return prev;
  }, {}));
  const [isEditingChannel, setIsEditingChannel] = useState(false);

  const onSelectUser = (id) => {
    setSelectedUsers((prev) => {
      const users = { ...prev };
      if (users[id]) {
        delete users[id];
        return users;
      } else {
        users[id] = true;
        return users;
      }
    })
  }

  const handleEditChannel = () => {
    if (!channelName.trim()) {
      toast.error('Please input channel name');
      return;
    }
    const members = [];
    for (const selectedUser in selectedUsers) {
      members.push(selectedUser);
    }
    setIsEditingChannel(true);
    socket.emit(`${REQUEST.CHANNEL}_${METHOD.UPDATE}`, {
      id: channel._id,
      channel: {
        name: channelName,
        members,
      }
    });
  }

  const onEditChannel = (status, data) => {
    if (status == STATUS.SUCCESS) {
      setIsEditingChannel(false);
      onClose?.();
    } else if (status == STATUS.FAILED) {
      setIsEditingChannel(false);
      toast.error(data);
    }
  }

  useEffect(() => {
    socket.on(`${REQUEST.CHANNEL}_${METHOD.UPDATE}`, onEditChannel);
    return () => {
      socket.removeListener(`${REQUEST.CHANNEL}_${METHOD.UPDATE}`, onEditChannel);
    }
  }, [channel]);

  return (
    <Modal onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Edit channel
        </ModalHeader>
        <ModalBody>
          <VStack gap={4} align='stretch' h={"540px"} overflowY={"scroll"}>
            <Box>
              <FormLabel>
                Channel name
              </FormLabel>
              <Input
                size='sm'
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
              />
            </Box>
            <VStack gap={1} align='stretch'>
              {users.map(user => (
                <Flex
                  key={user._id}
                  p={1}
                  gap={2}
                  rounded={4}
                  cursor='pointer'
                  _hover={{ bg: '#0001' }}
                  onClick={() => onSelectUser(user._id)}
                >
                  <Checkbox isChecked={selectedUsers[user._id]} />
                  {user.username}
                </Flex>
              ))}
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button
              size='sm'
              isDisabled={isEditingChannel}
              onClick={handleEditChannel}
            >
              {isEditingChannel ? <Spinner size="sm" /> : <>Update</>}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ChannelEditModal;
