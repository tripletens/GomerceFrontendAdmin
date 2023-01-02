import  React, {useState, useEffect, useCallback} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Pick({setOut, presentMonth}){
    const [date, setDate] = useState(1);
    const handleChange = (e) => {
    let value = e.target.value;
    setDate(value);    
};


const setCalendar = useCallback((target) => {

    let months = [  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const { Day, Month, Year, control } = presentMonth(target);


    switch (target) {
        case -30:
          setOut({Month: months[Month-1], Day: 1, Year: Year, control: date });                   // Last month
          break;

        case -1:
            setOut({Month:months[Month+target], Day:(Day+target),Year:Year, control: date });     // Last 30 days cycle
            break;

        case 0:
          setOut({Month: months[Month], Day:(Day-target), Year:Year, control: date });            // Today
            break;

        case 1:
            setOut({Month: months[Month], Day:target, Year:Year, control: date });                // This Month
            break;

        case 6:
          setOut({Month: months[Month], Day:(Day-target), Year:Year, control: date });            // Last seven days 
            break;
    
        default:
            break;
    }

},[setOut, presentMonth, date]);


  useEffect(() => {
    setCalendar(date);
  }, [setCalendar, date])
 

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select">Date</InputLabel>
        <Select
          labelId="select"
          id="simple-select"
          value={date}
          label="date"
          onChange={handleChange}>

          <MenuItem value={0}>Today</MenuItem>
          <MenuItem value={6}>Last 7 Days</MenuItem>
          <MenuItem value={-1}>Last 30 Days</MenuItem>
          <MenuItem value={-30}>Last Month</MenuItem>
          <MenuItem value={1}>This Month</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}