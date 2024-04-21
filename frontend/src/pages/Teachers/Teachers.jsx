import { Box } from "../../components/Box";
import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  FormFileInput,
  FormSearchInput,
} from "../../components/Form";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../components/Table";
import { FormIcon } from "../../components/Form/FormIcon";

import { Title } from "../../components/Typography";
import "./teachers.css";
import { DeleteButton, EditButton } from "../../components/Button";

export function Teachers() {
  return (
    <div className="container">
      <div className="teachers-inner">
        <div className="flex flex-col mb-[60px]">
          <Title variant={"h2"} stylex="mb-8">
            Yangi o’qtuvchi qo’shish
          </Title>
          <Form className={"flex flex-wrap gap-8 w-full justify-between"}>
            <FormGroup>
              <FormLabel>O’qtuvchi ismi</FormLabel>
              <FormInput />
            </FormGroup>
            <FormGroup>
              <FormLabel>Telefon raqam</FormLabel>
              <FormInput type={"tel"} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Yo’nalish</FormLabel>
              <FormSelect options={[{ id: 1, value: "Matematika" }]} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Yoshi</FormLabel>
              <FormInput type={"number"} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Rasm 3x4</FormLabel>
              <FormFileInput id="img" />
            </FormGroup>
            <FormGroup>
              <FormLabel>O’qituvchi familiyasi</FormLabel>
              <FormInput />
            </FormGroup>
            <FormGroup stylex="ml-auto">
              <FormButton>Qo’shish</FormButton>
            </FormGroup>
          </Form>
        </div>
        <div className="flex">
          <Box stylex="justify-between w-full mb-9">
            <Title variant="h2">Bizning o’qtuvchilar</Title>
            <Form>
              <Box stylex="relative">
                <FormIcon icon="search" stylex="top-3 left-4" />
                <FormSearchInput />
              </Box>
            </Form>
          </Box>
        </div>
      </div>
      <div className="pl-[44px] pr-[36px] pb-10 ">
        <div className="max-h-[507px] overflow-auto">
          <Table>
            <Thead stylex="sticky top-0">
              <Tr>
                <Th>№</Th>
                <Th>O’qtuvchi ismi</Th>
                <Th>Telefon nomer</Th>
                <Th>Yo’nalish</Th>
                <Th>Yoshi</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td bolder="true">1</Td>
                <Td>Muxamadaliyev Ibroxim</Td>
                <Td>+998900113861</Td>
                <Td>Matematika</Td>
                <Td stylex="flex justify-between">
                  25
                  <Box stylex="gap-[10px]">
                    <EditButton />
                    <DeleteButton />
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td bolder="true">1</Td>
                <Td>Muxamadaliyev Ibroxim</Td>
                <Td>+998900113861</Td>
                <Td>Matematika</Td>
                <Td>25</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
