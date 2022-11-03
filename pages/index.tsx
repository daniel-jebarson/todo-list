import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../hooks";
import { useState } from "react";
import {
  ChakraProvider,
  Text,
  Container,
  InputGroup,
  Input,
  Button,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SmallAddIcon, AddIcon } from "@chakra-ui/icons";
import Todo from "../components/todo";
export default function Home() {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const { ADDTODO, REMOVETODO } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.todo);
  return (
    <ChakraProvider resetCSS>
      <Container mt="50px">
        <Text
          bgClip="text"
          fontSize="6xl"
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          fontWeight="extrabold"
        >
          TodoList App
        </Text>
      </Container>
      <Container justifyContent={"center"} display="flex">
        <InputGroup mt={"50px"} width={"600px"} size="lg">
          <Input
            onChange={(e) => setDesc(e.target.value.trim())}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                desc != "" ? ADDTODO(desc) : alert("Input can't be empty");
              }
            }}
            pr="4.5rem"
            type={"text"}
            placeholder="Enter password"
          />
          <InputRightElement width="2.8rem">
            <IconButton
              onClick={() =>
                desc != "" ? ADDTODO(desc) : alert("Input can't be empty")
              }
              colorScheme="green"
              color={"white"}
              aria-label="Search database"
              icon={<AddIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </Container>
      <Todo display={state.noOfTasks} />
    </ChakraProvider>
  );
}
