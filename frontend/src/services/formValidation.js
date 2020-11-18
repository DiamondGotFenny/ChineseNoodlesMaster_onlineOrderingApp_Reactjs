import Joi from "joi-browser";

export const validateInputs=(name,value)=>{
    const schemaRules = {
        name: Joi.string()
        .min(3)
        .max(18)
        .required()
        .label("name"),
        
        email: Joi.string()
          .email({ minDomainAtoms: 2 })
          .label("email"),
        tel: Joi.string()
        .trim()
        .regex(/^[0-9]{7,16}$/)
        .required()
        .error(()=>{
          return {
            message: 'Please Enter A Valid Phone Number',
          };
        }),
        
        password: Joi.string()
          .min(8)
          .max(32)
          .label("password"),
        /*password_confirm: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' }, label: 'Password Confirmation' } })*/
        password_confirm: Joi.string()
          .min(8)
          .max(32)
          .label("password_confirm"),
      };

      const obj={[name]:value};
      const schema={[name]:schemaRules[name]};
      const {error}=Joi.validate(obj,schema);
      const errorMsg=error?.details[0]?.message;
      return errorMsg;
}