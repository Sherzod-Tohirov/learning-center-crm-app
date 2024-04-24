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
import {
  useDeleteSubjectMutation,
  useGetSubjectsQuery,
  usePostSubjectMutation,
} from "../../store/subjects/subjectApi";
import { useHookForm } from "./hooks/useHookForm";
import { useToast } from "../../hooks/useToast";
import { handleDeleteSubject, handleResponse } from "./utils";
import { useMemo, useRef } from "react";
import { column } from "./helper/column";
import { useTable } from "react-table";
import { HashLoader } from "react-spinners";

export function Subjects() {
  const deleteButtonRef = useRef();
  const [mutation, { isLoading }] = usePostSubjectMutation();
  const [deleteMutation, deleteMutationConfig] = useDeleteSubjectMutation();
  const { register, handleSubmit, errors, isValid, reset } = useHookForm();
  const { toasted } = useToast();
  const { data } = useGetSubjectsQuery();
  const columns = useMemo(() => column, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: data?.status === 200 ? data.data : [],
    });
  return (
    <div className="container">
      <div className="subjects-inner">
        <div className="flex flex-col" style={{ marginBottom: "54px" }}>
          <Title variant={"h2"} stylex="mb-8">
            Yangi fan qo’shish
          </Title>
          <Form
            className="flex justify-between"
            onSubmit={handleSubmit((data) => {
              const res = mutation(data);
              handleResponse(res, toasted, reset);
            })}
          >
            <FormGroup>
              <FormLabel>Fan nomi</FormLabel>
              <FormInput
                {...register("subject_name")}
                error={errors?.subject_name?.message || false}
              />
            </FormGroup>
            <FormGroup>
              <FormButton
                isLoading={isLoading}
                stylex="mt-auto"
                disabled={!isValid ? true : false}
              >
                Qo’shish
              </FormButton>
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
          <Table {...getTableProps()}>
            <Thead stylex="sticky top-0">
              {headerGroups.map((headerGroup) => (
                <Tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th key={column} {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {data?.data.length ? (
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    <Tr key={row} {...row.getRowProps()}>
                      {row.cells.map((cell, index) => (
                        <Td
                          key={cell}
                          {...cell.getCellProps()}
                          stylex={`${
                            row.cells?.length === index + 1
                              ? "flex items-center justify-between gap-3"
                              : ""
                          }`}
                          style={{ padding: "20px" }}
                        >
                          {cell.render("Cell")}
                          {row.cells?.length === index + 1 ? (
                            <Box stylex="gap-[10px]">
                              <EditButton />
                              <DeleteButton
                                onClick={(e) => {
                                  handleDeleteSubject(
                                    e,
                                    deleteMutation,
                                    cell.row.original?.id,
                                    toasted
                                  );
                                }}
                                ref={deleteButtonRef}
                              />
                            </Box>
                          ) : (
                            ""
                          )}
                        </Td>
                      ))}
                    </Tr>
                  );
                })
              ) : (
                <Tr>
                  <Td stylex="text-lg opacity-65 select-none" colSpan="2">
                    {"Hali fanlar yo'q !"}
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
