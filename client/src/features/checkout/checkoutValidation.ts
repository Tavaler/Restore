<<<<<<< HEAD
import * as yup from 'yup';
 
export const validationSchema = [
    yup.object({
        fullName: yup.string().required('Full name is required'),
        address1: yup.string().required('Addres line 1 is required'),
        address2: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        country: yup.string().required(),
    }),
    yup.object(),
    yup.object({
        nameOnCard: yup.string().required()
    })
]
//yup.object จับคู่กับ Address,review,payment เรียงตามลำดับ
=======
import * as yup from "yup";
export const validationSchema = [
  yup.object({
    fullName: yup.string().required("Full name is required"),
    address1: yup.string().required("Addres line 1 is required"),
    address2: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    country: yup.string().required(),
  }),
  yup.object(),
  yup.object({
    nameOnCard: yup.string().required(),
  }),
];
//yup.object จับคู่กับ Address,review,payment เรียงตามล าดับ
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
