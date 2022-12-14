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
      alignItems="center"
      border={"2px solid rgba(66, 153, 225, 0.6)"}
      mt="80px"
    >
      <Text pt={"25px"} fontSize={"3xl"} fontWeight={"bold"}>
        No of Tasks: {state.noOfTasks}
      </Text>

      <Container
        justifyContent={"center"}
        display="flex"
        flexDirection={"column"}
        mt="40px"
        gap={"40px"}
        pb={"19px"}
      >
        {state.data.map((val, index) => {
          return (
            <ButtonGroup size="sm" isAttached variant="outline" gap={"30px"}>
              <Container
                key={index}
                position={"relative"}
                border={"2px solid rgba(66, 153, 225, 0.6)"}
                display="flex"
                flexDirection={"row"}
              >
                <Text borderRadius="15px" padding={"10px 17px"} minW={"100px"}>
                  {val}
                </Text>
                <IconButton
                  position={"absolute"}
                  right="10px"
                  top="7px"
                  onClick={() => {
                    REMOVETODO(index);
                  }}
                  w={8}
                  h={8}
                  color="red.500"
                  aria-label="Remove"
                  icon={<DeleteIcon />}
                />
              </Container>
            </ButtonGroup>
          );
        })}
      </Container>
    </Container>
  );
};
export default Todo;
