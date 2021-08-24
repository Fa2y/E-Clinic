import React,{useState} from 'react'
import SelectField from 'components/controls/SelectField'
import { MedicalObjects } from 'Medical_constants/constants';
  export default function testSelect() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (
        <div>
          {/* <SelectField name="se" label="this is my select" options={MedicalObjects.SkinProblems} onChange={handleChange} value={age}/>   */}
        </div>
    )
}
