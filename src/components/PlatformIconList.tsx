import { Platfrom } from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";
interface Props {
  platforms: Platfrom[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;



// import { Platfrom } from "@/hooks/useGames";
// import { HStack, Icon } from "@chakra-ui/react";
// import { IconType } from "react-icons";
// import { BsGlobe } from "react-icons/bs";
// import {
//   FaAndroid,
//   FaApple,
//   FaLinux,
//   FaPlaystation,
//   FaWindows,
//   FaXbox,
// } from "react-icons/fa";
// import { MdPhoneIphone } from "react-icons/md";
// import { SiNintendo } from "react-icons/si";
// interface Props {
//   platforms: Platfrom[];
// }

// const PlatformIconList = ({ platforms }: Props) => {
//   const iconMap: { [key: string]: IconType } = {
//     pc: FaWindows,
//     playstation: FaPlaystation,
//     xbox: FaXbox,
//     nintendo: SiNintendo,
//     mac: FaApple,
//     linux: FaLinux,
//     ios: MdPhoneIphone,
//     android: FaAndroid,
//     web: BsGlobe,
//   };
//   return (
//     <HStack marginY={"10px"}>
//       {platforms.map((platform) => (
//         <Icon as={iconMap[platform.slug]} color="gray.500" />
//       ))}
//     </HStack>
//   );
// };

// export default PlatformIconList;
