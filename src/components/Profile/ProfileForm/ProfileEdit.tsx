
import { Avatar, Button, Input, Select, Textarea } from "@telegram-apps/telegram-ui";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import styles from "./profileform.module.scss"



interface IFormInput {
  firstName: string
  lastName: string
}


const ProfileEdit = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
        photo: "",
      firstName: "",
      lastName: "",
      relations: "",
      city: "",
      status: ""
    },
  })


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }


  return (
    <form className={styles.editForm} onSubmit={handleSubmit(onSubmit)} >
        {/* <Controller
        name="photo"
        control={control}
        render={({ field }) => <Avatar {...field} size={96} acronym="TG"/>}
      /> */}
      <div className={styles.editImage}>
        <Controller
          name="photo"
          control={control}
          render={({ field }) => <Avatar {...field} size={96} acronym="TG" />}
        />
        <Button type="button" mode="plain" size="s">Изменить фотографию</Button>
      </div>
      
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input {...field} placeholder="Имя"/>}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => <Input {...field} placeholder="Фамилия"/>}
      />
      <Controller
        name="relations"
        control={control}
        render={({ field }) => <Select {...field}  defaultValue="">
            <option></option>
            <option>В отношениях</option>
            <option>В супружестве</option>
            <option>В поиске</option>
            <option>Отдыхаю</option>
        </Select>}
      />
      <Controller
        name="city"
        control={control}
        render={({ field }) => <Input {...field} placeholder="Город"/>}
      />
      <Controller
        name="status"
        control={control}
        render={({ field }) => <Textarea {...field} placeholder="Статус"/>}
      />
      <Button className={styles.btnSubmit} mode="filled" type="submit" size="l">Подтвердить</Button>

      {/* <Controller
        name="status"
        control={control}
        render={({ field }) => <Button {...field} mode="filled" type="submit" size="l" 
        >Подтвердить</Button>}
      /> */}
      {/* <input type="submit" /> */}
    </form>
  )
}

export default ProfileEdit