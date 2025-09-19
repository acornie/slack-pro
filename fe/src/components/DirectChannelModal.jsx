import { Box, Button, Checkbox, Flex, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, Spinner, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import useUser from "../api/useUsers";
import { METHOD, REQUEST, STATUS } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import toast from "../utils/toast";

const DirectChannelModal = (props) => {
  const { users } = useUser();
  const { socket } = useContext(SocketContext);
  const [channelName, setChannelName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState({});
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);

  const onSelectUser = (id) => {
    setSelectedUsers(id)
  }

  const handleCreateChannel = () => {
    const members = [];
 const userExists = props.directs.includes(selectedUsers);
 if(userExists) {
  toast.warning('Already exists');
 } else {
    socket.emit(`${REQUEST.CHANNEL}_${METHOD.CREATE}`, {
      members:[selectedUsers],
      types:"invite"
    });}
    setIsCreatingChannel(true);
  }

  const onCreateChannel = (status, data) => {
    if (status == STATUS.SUCCESS) {
      setIsCreatingChannel(false);
    } else if (status == STATUS.FAILED) {
      setIsCreatingChannel(false);
      toast.error(data);
    }
  }

  useEffect(() => {
    socket.on(`${REQUEST.CHANNEL}_${METHOD.CREATE}`, onCreateChannel);
    return () => {
      socket.removeListener(`${REQUEST.CHANNEL}_${METHOD.CREATE}`, onCreateChannel);
    }
  }, []);

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Invite members
        </ModalHeader>
        <ModalBody>
          <VStack gap={4} align='stretch' h={"540px"} overflowY={"scroll"}>
            { <Box>
              {/* <FormLabel>
                Channel name
              </FormLabel> */}
              {/* <Input
                size='sm'
                onChange={(e) => setChannelName(e.target.value)}
              /> */}
            </Box> }
            <VStack gap={1} align='stretch'>
              {users.map((user,i) => (
                <Flex
                  key={user._id}
                  p={1}
                  gap={2}
                  rounded={4}
                  cursor='pointer'
                  _hover={{ bg: '#0001' }}
                  onClick={() => onSelectUser(user._id)}
                >
                  <input type="radio" id = {i} name="name"/>
                  <label htmlFor={i}>{user.email}</label>
                </Flex>
              ))}
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button size='sm' isDisabled={isCreatingChannel} onClick={handleCreateChannel}>
            {isCreatingChannel ? <Spinner size="sm" /> : <>Create</>}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DirectChannelModal;
