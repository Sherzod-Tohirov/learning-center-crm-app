import "./pupils.css";
import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../components/Form";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../components/Table";
import { FormSearchInput } from "../../components/Form/FormSearchInput";
import { FormIcon } from "../../components/Form/FormIcon";
import { Title } from "../../components/Typography";
import { DeleteButton, EditButton } from "../../components/Button";
import { Box } from "../../components/Box";
export function Pupils() {
  return (
    <div className="pb-[201px]">
      <div className="container">
        <div className="pt-8 pl-20 form-wrapper">
          <Title variant="h2" stylex="mb-8">
            Yangi o&apos;quvchi qo&apos;shish
          </Title>
          <Form className="flex flex-wrap gap-8 max-w-[1026px] w-full justify-between mb-12">
            <FormGroup>
              <FormLabel htmlFor="name">O`quvchi ismi</FormLabel>
              <FormInput id="name" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="tel">Telefon raqam</FormLabel>
              <FormInput id="tel" type="tel" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="surname">O`quvchi familiyasi</FormLabel>
              <FormInput id="surname" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="parent-name">Ota-onasi ismi</FormLabel>
              <FormInput id="parent-name" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="parent-tel">Ota-onasi nomeri</FormLabel>
              <FormInput id="parent-tel" type="tel" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="group">Guruh</FormLabel>
              <FormSelect
                id="group"
                options={[
                  { id: 1, value: "N5" },
                  { id: 2, value: "N4" },
                ]}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="age">O`quvchi yoshi</FormLabel>
              <FormInput id="age" type="number" min={3} />
            </FormGroup>
            <FormGroup stylex="ml-auto">
              <FormButton stylex="mt-auto">Qo&apos;shish</FormButton>
            </FormGroup>
          </Form>
          <Box stylex="justify-between max-w-[1026px] w-full mb-9">
            <Title variant="h2">Bizning o’quvchilar</Title>
            <Form>
              <Box stylex="relative">
                <FormIcon icon="search" stylex="top-3 left-4" />
                <FormSearchInput />
              </Box>
            </Form>
          </Box>
        </div>
        <div className="pl-[44px] pr-[36px] ">
          <div className="max-h-[507px] overflow-auto">
            <Table>
              <Thead stylex="sticky top-0">
                <Tr>
                  <Th>№</Th>
                  <Th>O’quvchi ismi</Th>
                  <Th>Telefon nomer</Th>
                  <Th>Yo’nalish</Th>
                  <Th>Ota-ona(F.I.SH)</Th>
                  <Th>Ota-ona (Tel)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td>+998900113861</Td>
                </Tr>
                <Tr>
                  <Td bolder="true">1</Td>
                  <Td>Muxamadaliyev Ibroxim</Td>
                  <Td>+998900113861</Td>
                  <Td>Matematika</Td>
                  <Td>Ota-ona(F.I.SH)</Td>
                  <Td stylex="flex items-center gap-5">
                    +998900113861
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
    </div>
  );
}
