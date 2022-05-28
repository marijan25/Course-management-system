import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function MaterialUIPickers({startDate, editForm, endDate, handleChangeStartDate, handleChangeEndDate}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label={editForm.id ? "Edit start date" : "Add start date"}
          inputFormat="yyyy-MM-dd"
          mask={"____-__-__"}
          value={startDate}
          onChange={handleChangeStartDate}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label={editForm.id ? "Edit end date" : "Add end date"}
          inputFormat="yyyy-MM-dd"
          mask={"____-__-__"}
          value={endDate}
          onChange={handleChangeEndDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
