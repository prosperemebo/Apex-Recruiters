import { useFormik } from 'formik';
import classes from './Forms.module.scss';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    onSubmit: () => {},
    validationSchema: Yup.object({
      fullName: Yup.string().required('Please enter your Full Name!'),
      subject: Yup.string().required('Please enter a subject!'),
      message: Yup.string().required('Please enter a message!'),
      email: Yup.string()
        .required('Please enter your Email!')
        .email('Email address is Invalid!'),
    }),
    validateOnChange: true,
  });

  return (
    <form className={classes.main} onSubmit={formik.handleSubmit}>
      <div className='apx-fields'>
        <div className='apx-field'>
          <input
            type='text'
            className='apx-input'
            placeholder='Full Name*'
            name='fullName'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <small className='small-text error-text'>
              {formik.errors.fullName}
            </small>
          ) : null}
        </div>
        <div className='apx-field'>
          <input
            type='email'
            className='apx-input'
            placeholder='Email*'
            name='email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className='small-text error-text'>
              {formik.errors.email}
            </small>
          ) : null}
        </div>
      </div>
      <div className={classes.fields}>
        <div className='apx-field'>
          <input
            type='text'
            className='apx-input'
            placeholder='Phone*'
            name='phone'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <small className='small-text error-text'>
              {formik.errors.phone}
            </small>
          ) : null}
        </div>
        <div className='apx-field'>
          <input
            type='subject'
            className='apx-input'
            placeholder='Subject*'
            name='subject'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <small className='small-text error-text'>
              {formik.errors.subject}
            </small>
          ) : null}
        </div>
      </div>
      <div className={classes.fields}>
        <div className='apx-field'>
          <textarea
            type='text'
            className='apx-input message'
            placeholder='Message*'
            name='message'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <small className='small-text error-text'>
              {formik.errors.message}
            </small>
          ) : null}
        </div>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ContactForm;
