import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../components/Form";
import { Title } from "../../components/Typography";
import { GroupCard } from "./components/GroupCard";
import "./groups.css";
export function Groups() {
  return (
    <>
      <div className="groups-wrapper container">
        <div className="flex flex-col">
          <Title variant={"h2"} stylex="mb-8">
            Yangi guruh qo’shish
          </Title>
          <Form className={"flex flex-wrap gap-8 w-full justify-between"}>
            <FormGroup>
              <FormLabel>Guruh yo’nalishi</FormLabel>
              <FormSelect options={[{ id: 1, value: "Matematika" }]} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Dars kunlari</FormLabel>
              <FormSelect options={[{ id: 1, value: "DU-CHOR-JUMA" }]} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Dars boshlanishi vaqti</FormLabel>
              <FormInput type={"time"} value={"00:00"} max={"24:00"} />
            </FormGroup>
            <FormGroup>
              <FormLabel>O’qituvchi</FormLabel>
              <FormSelect options={[{ id: 1, value: "Muhammadiyev Ibrohim" }]} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Dars tugash vaqti</FormLabel>
              <FormInput type={"time"} value={"00:00"} max={"24:00"} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Guruh nomi</FormLabel>
              <FormInput />
            </FormGroup>
            <FormGroup stylex="ml-auto">
              <FormButton>Qo’shish</FormButton>
            </FormGroup>
          </Form>
        </div>
        <div className="flex flex-col pb-10">
            <Title variant={'h2'} stylex="mb-[34px]">Mavjud Guruhlar</Title>
            <ul className="flex flex-wrap gap-8">
                <GroupCard />
                <GroupCard />
                <GroupCard />
            </ul>
        </div>
      </div>
    </>
  );
}
