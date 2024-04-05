import * as yup from 'yup'


export const basicSchema=yup.object().shape({
    email: yup.string().email('Please enter a valid Email').required('Mail is Required'),
    username: yup.string().required('Username is required').min(3, 'Name must be more than 3 characters'),
    password: yup.string().min(4).required('Password is Required')
})