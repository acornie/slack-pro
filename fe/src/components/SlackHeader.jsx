import { Box, Center, HStack, Input} from "@chakra-ui/react"
import { FaSearch,FaArrowLeft,FaArrowRight,FaHistory } from "react-icons/fa"

const SlackHeader = () => {
    return (
        <>
            <HStack className="slackheader" justifyContent={"center"} color={'white'}>
                <FaArrowLeft></FaArrowLeft>
                <FaArrowRight></FaArrowRight>
                <FaHistory></FaHistory>
                <Input w={"800px"} color={"white"} placeholder="Search..."></Input>
            </HStack>
        </>
    )
}

export default SlackHeader
