import { useFormik } from 'formik';
import classes from './Forms.module.scss';
import * as Yup from 'yup';
import Countries from './Countries';

const SubmitCVForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      nationality: '',
      qualification: '',
      preferredJobTitle: '',
      knowledgeReference: '',
      message: '',
      cv: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your First Name!'),
      lastName: Yup.string().required('Please enter your Last Name!'),
      phone: Yup.string().required('Please enter your Phone Number!'),
      gender: Yup.string().required('Please select your appropriate gender!'),
      nationality: Yup.string().required('Please select your country!'),
      preferredJobTitle: Yup.string().required(
        'Please specify your Preferred Job Title!'
      ),
      knowledgeReference: Yup.string().required('This input is required!'),
      qualification: Yup.string().required('Please select a qualification!'),
      email: Yup.string()
        .required('Please enter your Email!')
        .email('Email address is Invalid!'),
      cv: Yup.mixed().required('Please upload your CV!'),
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
            placeholder='First Name*'
            name='firstName'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <small className='small-text error-text'>
              {formik.errors.firstName}
            </small>
          ) : null}
        </div>
        <div className='apx-field'>
          <input
            type='text'
            className='apx-input'
            placeholder='Last Name*'
            name='lastName'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <small className='small-text error-text'>
              {formik.errors.lastName}
            </small>
          ) : null}
        </div>
      </div>
      <div className='apx-fields'>
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
        <div className='apx-field'>
          <input
            type='text'
            className='apx-input'
            placeholder='Phone Number*'
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
      </div>
      <div className='apx-fields'>
        <div className='apx-field'>
          <select
            type='gender'
            className='apx-input'
            placeholder='Gender*'
            name='gender'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option value=''>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Prefer not to Say'>Prefer not to Say</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <small className='small-text error-text'>
              {formik.errors.gender}
            </small>
          ) : null}
        </div>
        <div className='apx-field'>
          <select
            type='nationality'
            className='apx-input'
            placeholder='Nationality*'
            name='nationality'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.nationality}
          >
            <Countries />
          </select>
          {formik.touched.nationality && formik.errors.nationality ? (
            <small className='small-text error-text'>
              {formik.errors.nationality}
            </small>
          ) : null}
        </div>
      </div>
      <div className='apx-fields'>
        <div className='apx-field'>
          <input
            type='text'
            className='apx-input'
            placeholder='Preferred Job Title*'
            name='preferredJobTitle'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.preferredJobTitle}
          />
          {formik.touched.preferredJobTitle &&
          formik.errors.preferredJobTitle ? (
            <small className='small-text error-text'>
              {formik.errors.preferredJobTitle}
            </small>
          ) : null}
        </div>
        <div className='apx-field'>
          <select
            type='qualification'
            className='apx-input'
            placeholder='Qualification*'
            name='qualification'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.qualification}
          >
            <option value=''>Qualification</option>
            <option value='Under Grad'>Under Grad</option>
            <option value='OND'>OND</option>
            <option value='HND'>HND</option>
            <option value='Masters'>Masters</option>
            <option value='BSC'>BSC</option>
          </select>
          {formik.touched.qualification && formik.errors.qualification ? (
            <small className='small-text error-text'>
              {formik.errors.qualification}
            </small>
          ) : null}
        </div>
      </div>
      <div className='apx-fields'>
        <div className='apx-field'>
          <select
            type='text'
            className='apx-input'
            placeholder='How did you hear about Apex Recruiter*'
            name='knowledgeReference'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.knowledgeReference}
          >
            <option value=''>How did you hear about Apex Recruiter</option>
            <option value='Instagram'>Instagram</option>
            <option value='Twitter'>Twitter</option>
            <option value='Whatsapp'>Whatsapp</option>
            <option value='Email'>Email</option>
            <option value='Word of mouth'>Word of mouth</option>
            <option value='Website'>Website</option>
            <option value='Other'>Other</option>
          </select>
          {formik.touched.knowledgeReference &&
          formik.errors.knowledgeReference ? (
            <small className='small-text error-text'>
              {formik.errors.knowledgeReference}
            </small>
          ) : null}
        </div>
      </div>
      <div className='apx-fields'>
        <div className='apx-field'>
          <p>Upload your CV</p>
          <input
            type='file'
            className='apx-input'
            placeholder='Upload CV*'
            name='cv'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.cv}
          />
          {formik.touched.cv && formik.errors.cv ? (
            <small className='small-text error-text'>{formik.errors.cv}</small>
          ) : null}
        </div>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default SubmitCVForm;
