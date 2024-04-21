import "./subjects.css";
import { Title } from "../../components/Typography";
import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../components/Form";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../components/Table";
import { DeleteButton, EditButton } from "../../components/Button";
import { Box } from "../../components/Box";

export function Subjects() {
  return (
    <div className="container">
      <div className="subjects-inner">
        <div className="flex flex-col" style={{marginBottom: "54px"}}>
          <Title variant={"h2"} stylex="mb-8">
            Yangi fan qo’shish
          </Title>
          <Form className="flex justify-between">
            <FormGroup>
              <FormLabel>Fan nomi</FormLabel>
              <FormInput />
            </FormGroup>
            <FormGroup>
              <FormButton stylex="mt-auto">Qo’shish</FormButton>
            </FormGroup>
          </Form>
        </div>
        <div className="flex flex-col">
          <Title variant={"h2"} stylex="mb-9">
            Barcha fanlar
          </Title>
        </div>
      </div>
      <div className="pl-[44px] pr-[36px] ">
        <div className="max-h-[507px] overflow-auto">
          <Table>
            <Thead stylex="sticky top-0">
              <Tr>
                <Th>№</Th>
                <Th>Fan nomi</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td bolder="true">1</Td>
                <Td className="flex items-center justify-between gap-3" style={{padding: "20px"}}>
                  Matematika
                  <Box stylex="gap-[10px]">
                    <EditButton />
                    <DeleteButton />
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
