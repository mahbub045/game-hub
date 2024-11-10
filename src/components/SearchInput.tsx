import { Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="2xl"
        px={3}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <Input
          ref={ref}
          focusRing="none"
          border="none"
          placeholder="Search games..."
          variant="outline"
        />
      </Flex>
    </form>
  );
};

export default SearchInput;

// import { Flex, Input } from "@chakra-ui/react";

// const SearchInput = () => {
//   return (
//     <Flex
//       align="center"
//       border="1px solid"
//       borderColor="gray.300"
//       borderRadius="2xl"
//       px={3}
//       width="full"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         width={20}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//         />
//       </svg>

//       <Input
//         focusRing="none"
//         border="none"
//         placeholder="Search games..."
//         variant="outline"
//       />
//     </Flex>
//   );
// };

// export default SearchInput;
