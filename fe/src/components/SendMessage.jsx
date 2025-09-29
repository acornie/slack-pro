import { Box, Button, Flex, Textarea, Input, VStack, Select } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaPlus, FaUpload } from "react-icons/fa";
import { METHOD, REQUEST } from "../constants/chat";
import { SocketContext } from "../context/SocketProvider";
import useUser from "../api/useUsers";
import axios from "axios";

const SendMessage = ({ isEditing, channelId, messageId, value, onClose }) => {
    const { socket } = useContext(SocketContext);
    const [message, setMessage] = useState(value);
    const [selectedFile, setSelectedFile] = useState(null);
    const [downloadFilename, setDownloadFilename] = useState('');
    const [files, setFiles] = useState([]);
    const [mention, setmention] = useState([])
    const { users } = useUser();
    const [showemailmadal, setshowemailmadal] = useState('none');
    const isTyping = useRef(false);
    const handleFileChange = (e) => {

        setFiles(e.target.files)
        console.log(e.target.files)
    };


    const getfile = () => {
        fileref.current.click();
    }
    const fileref = useRef(null);
    const removefile = (e) => {

    }
    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                setMessage('File uploaded successfully.');
                setDownloadFilename(data.filename);
            })
            .catch((err) => {
                console.error('Upload error:', err);
                setMessage('Error uploading file.');
            });
    };

    //   const handleDownload = () => {
    //     if (!downloadFilename) {
    //       alert('No file to download.');
    //       return;
    //     }

    //     fetch(`http://localhost:3001/download/${downloadFilename}`)
    //       .then((res) => {
    //         if (!res.ok) throw new Error('Network response was not ok.');
    //         return res.blob();
    //       })
    //       .then((blob) => {
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = downloadFilename; // or set a custom filename
    //         document.body.appendChild(a);
    //         a.click();
    //         a.remove();
    //         window.URL.revokeObjectURL(url);
    //       })
    //       .catch((err) => {
    //         console.error('Download error:', err);
    //         setMessage('Error downloading file.');
    //       });
    //   };




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
        setMessage(message + e);
        setshowemailmadal('none');
    }

    const [showfiles, setShowFiles] = useState([]);

    useEffect(() => {
        if (files) {
            let temp = [];
            for (const key in files) {
                const element = files[key];
                temp.push(element);
            }
            setShowFiles(temp);
        }
    }, [files])

    const handleSend = async () => {
        // isEditing = 1;
        if (isEditing) {
            socket.emit(
                `${REQUEST.MESSAGE}_${METHOD.UPDATE}`,
                {
                    id: messageId,
                    message: { message:message },
                }
            );
            
        } else {
            // console.log("1234567890")
            const formData = new FormData();
            showfiles.map((item, key) => {
                formData.append(`file${key}`, item);
            })
            try {
                const result = await axios.post("http://localhost:8080/file/file_upload", formData)
                console.log("result: ", result);
                const send_data = {channel: channelId, parent: messageId, files: result.data.data, message}
                console.log("send_____>", send_data)
                if (result.data.type == "success") {
                    console.log("success---------------")
                    socket.emit(
                        `${REQUEST.MESSAGE}_${METHOD.CREATE}`, send_data );
                }
            } catch (error) {
                
            }
            setMessage('');
        }
        setmention([]);
        // handleUpload();
        onClose?.();

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
                        if (e.key == '@') {
                            setshowemailmadal('flex');

                        }
                        else {
                            setshowemailmadal('none');
                            showemailmadal('none');

                        }
                        handleTyping();
                    }}


                />
                <Button flex='none' onClick={handleSend} >
                    <FaPaperPlane />
                </Button>
                <Flex display={showemailmadal} position={'absolute'} overflow={'auto'} height={'120px'} bottom={'115px'} bg={'rgba(147, 157, 165, 0.6);'} direction={'column'}
                    cursor={'pointer'}
                    w={'100px'}
                    borderTopRightRadius={'10px'}
                    borderTopLeftRadius={'10px'}
                >
                    {users.map((user, i) => (
                        <Box key={i} _hover={{ bg: 'rgba(83, 204, 103, 0.7)' }} onClick={() => selectted(user.username)}>{user.username}</Box>
                    ))}
                </Flex>
            </Flex>
            <Flex alignItems={'center'}>
                <Input type="file" ref={fileref} onChange={handleFileChange} multiple display={'none'} ></Input>
                <Box pl={'16px'} pb={'5px'} onClick={getfile}>
                    <FaPlus></FaPlus>
                </Box>
                <Box pl={'15px'}>
                    {Array.isArray(showfiles) && showfiles.length > 0 && (
                        <Select
                        //   border={}
                        >
                            {showfiles.map((file, i) => {
                                return (showfiles.length - 2 > i &&
                                    <option key={i} value={file.name} onClick={(e) => { removefile(i) }}>

                                        {file.name}
                                    </option>

                                );
                            })}
                        </Select>

                    )}
                </Box>

            </Flex>

        </Flex>

    )
}

export default SendMessage;
