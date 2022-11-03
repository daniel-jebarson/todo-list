import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../hooks";

const Todo = (props: { display: number }) => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const { ADDTODO, REMOVETODO } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.todo);
  return (
    <Container
      justifyContent={"center"}
      display="flex"
      flexDirection={"column"}
      mt="80px"
    >
      <Text ml={"40%"}>No of Tasks:{state.noOfTasks}</Text>

      <Container
        justifyContent={"center"}
        display="flex"
        flexDirection={"column"}
        mt="40px"
        gap={"40px"}
      >
        {state.data.map((val, index) => {
          return (
            <ButtonGroup size="sm" isAttached variant="outline" gap={"30px"}>
              <Text>{val.description}</Text>
              <IconButton
                onClick={() => {
                  REMOVETODO();
                }}
                w={8}
                h={8}
                color="red.500"
                aria-label="Remove"
                icon={<DeleteIcon />}
              />
            </ButtonGroup>
          );
        })}
      </Container>
    </Container>
  );
};
export default Todo;
