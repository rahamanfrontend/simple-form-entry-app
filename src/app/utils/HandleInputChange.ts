import { FieldValues, UseFormSetValue } from "react-hook-form";

const handleInputChange = (
   event: any,
   setValue: UseFormSetValue<FieldValues>
): void => {
   if (event.target) {
      const { name, value } = event.target;
      setValue(name, value);
   }
};

export default handleInputChange;
