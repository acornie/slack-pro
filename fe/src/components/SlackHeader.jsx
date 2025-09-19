import { Box, Center, HStack, Input} from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"

const SlackHeader = () => {
    return (
        <>
            <HStack className="slackheader" justifyContent={"center"}>
                <Input w={"800px"} color={"white"} placeholder="Search..."></Input>
            </HStack>
        </>
    )
}

export default SlackHeader
