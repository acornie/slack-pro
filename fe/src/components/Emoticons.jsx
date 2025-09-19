import { emoticons } from "../constants/emoticons";
import Emoticon from "./Emoticon";

const Emoticons = ({ onSelect }) => {
    return (
        <>
            {emoticons.map(emoticon => (
                <Emoticon
                    key={emoticon.id}
                    id={emoticon.id}
                    cursor='pointer'
                    onClick={() => onSelect?.(emoticon.id)} 
                />
            ))}
        </>
    )
}

export default Emoticons;
