"use client";
import { useForm } from "react-hook-form";
import schema from "@/constants/schema";
import Typography from "@/components/Typography";

const SignUp = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm();

 
   return (
      <div>
         <Typography variant="P_Medium_H4">Sign Up Form</Typography>
      </div>
   );
};

export default SignUp;
