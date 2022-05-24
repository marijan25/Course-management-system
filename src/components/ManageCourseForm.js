import { Button, Input } from "@mui/material"
import { Box } from "@mui/material"
import Calendar from "./Calendar"
import { Stack } from "@mui/material"
import { addCourse, editCourse } from "../CourseService"
import { useState } from "react"
import { format } from "date-fns"

const ManageCourseForm = ({ loadData, editForm, handleCloseModal }) => {
  const [courseName, setCourseName] = useState(editForm.courseName)
  const [startDate, setStartDate] = useState(editForm.startDate)
  const [endDate, setEndDate] = useState(editForm.endDate)
  const handleChangeStartDate = (newValue) => {
    setStartDate(format(newValue, 'yyyy-MM-dd'));
  };
  const handleChangeEndDate = (newValue) => {
    setEndDate(format(newValue, 'yyyy-MM-dd'));
  };
  const onSubmit = (e) => {
      e.preventDefault()
      setCourseName('')
      if(editForm.id){
        editCourse({courseName, startDate, endDate, id: editForm.id}).then(loadData)
      } else {
        addCourse({courseName, startDate, endDate}).then(loadData)
      }
  } 
  return (
    <div>
      <h1 className="title-modal">{editForm.id ? 'Edit Course' : 'Add New Course'}</h1>
      <form onSubmit={onSubmit}>
        <Box className="course-name">
            <Input 
                placeholder={editForm.id ? "Edit course name" : "Add course name"} 
                onChange = {(e) => setCourseName(e.target.value)}
                defaultValue = {editForm.courseName}
                required
            /> 
        </Box>
        <Box className="calendar">
            <Calendar
                startDate = {startDate}
                endDate = {endDate}
                handleChangeStartDate = {handleChangeStartDate}
                handleChangeEndDate = {handleChangeEndDate}
                editForm = {editForm}
            />
        </Box>
        <Box className="button-modal">
            <Stack spacing={2} direction="row">
                <Button variant="outlined" type="submit" disabled = {!courseName}>{editForm.id ? "Edit" : "Add"}</Button>
                <Button variant="outlined" onClick={handleCloseModal}>Exit</Button>
            </Stack>
        </Box>
      </form>
    </div>
  )
}

export default ManageCourseForm
