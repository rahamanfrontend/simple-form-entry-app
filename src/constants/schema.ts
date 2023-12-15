const schema = {
   firstName: {
      label: "First Name",
      type: "text",
      validation: {
         required: "First Name is required",
         minLength: {
            value: 3,
            message: "First Name should have at least 3 characters",
         },
      },
   },
   lastName: {
      label: "Last Name",
      type: "text",
      validation: {
         required: "Last Name is required",
      },
   },
   email: {
      label: "Email",
      type: "email",
      validation: {
         required: "Email is required",
         pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
         },
      },
   },
};

export default schema;
