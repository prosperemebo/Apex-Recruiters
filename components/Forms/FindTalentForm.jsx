import { useFormik } from 'formik';
import classes from './Forms.module.scss';
import * as Yup from 'yup';
import Countries from './Countries';

const FindTalentForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      nameOfOrganisation: '',
      email: '',
      phone: '',
      jobTitle: '',
      jobLocation: '',
      jobType: '',
      workType: '',
      jobDescription: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your First Name!'),
      lastName: Yup.string().required('Please enter your Last Name!'),
      nameOfOrganisation: Yup.string().required(
        'Please enter your Name Of Organisation!'
      ),
      phone: Yup.string().required('Please enter your Phone Number!'),
      jobTitle: Yup.string().required('Please specify your required job!'),
      jobLocation: Yup.string().required('Please specify job location!'),
      jobType: Yup.string().required('Please select Job Type!'),
      workType: Yup.string().required('Please select work type!'),
      email: Yup.string()
        .required('Please enter your Email!')
        .email('Email address is Invalid!'),
      jobDescription: Yup.mixed().required(
        'Please upload your Job Description!'
      ),
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
          <input
            type='text'
            className='apx-input'
            placeholder='Name Of Organisation*'
            name='nameOfOrganisation'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.nameOfOrganisation}
          />
          {formik.touched.nameOfOrganisation &&
          formik.errors.nameOfOrganisation ? (
            <small className='small-text error-text'>
              {formik.errors.nameOfOrganisation}
            </small>
          ) : null}
        </div>
      </div>
      <div className='apx-fields'>
        <div className='apx-field'>
          <input
            type='text'
            className='apx-input'
            placeholder='Job Title*'
            name='jobTitle'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.jobTitle}
          />
          {formik.touched.jobTitle && formik.errors.jobTitle ? (
            <small className='small-text error-text'>
              {formik.errors.jobTitle}
            </small>
          ) : null}
        </div>
        <div className='apx-field'>
          <input
            type='text'
            className='apx-input'
            placeholder='Job Location*'
            name='jobLocation'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.jobLocation}
          />
          {formik.touched.jobLocation && formik.errors.jobLocation ? (
            <small className='small-text error-text'>
              {formik.errors.jobLocation}
            </small>
          ) : null}
        </div>
      </div>
      <div className='apx-fields'>
        <div className='apx-field'>
          <select
            className='apx-input'
            placeholder='Job Type*'
            name='jobType'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.JobType}
          >
            <option value=''>Job Type</option>
            <option value='Full-time'>Full-time</option>
            <option value='Part-time'>Part-time</option>
            <option value='Contract'>Contract</option>
            <option value='Temporary'>Temporary</option>
            <option value='Volunteer'>Volunteer</option>
            <option value='Intership'>Intership</option>
          </select>
          {formik.touched.jobType && formik.errors.jobType ? (
            <small className='small-text error-text'>
              {formik.errors.jobType}
            </small>
          ) : null}
        </div>
        <div className='apx-field'>
          <select
            className='apx-input'
            name='workType'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.workType}
          >
            <option value=''>Work Place Type</option>
            <option value='Remote'>Remote</option>
            <option value='Hybrid'>Hybrid</option>
            <option value='Onsite'>Onsite</option>
          </select>
          {formik.touched.workType && formik.errors.workType ? (
            <small className='small-text error-text'>
              {formik.errors.workType}
            </small>
          ) : null}
        </div>
      </div>
      <div className='apx-fields'>
        <div className='apx-field'>
          <p>Upload Job Description</p>
          <input
            type='file'
            className='apx-input'
            name='jobDescription'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.jobDescription}
          />
          {formik.touched.jobDescription && formik.errors.jobDescription ? (
            <small className='small-text error-text'>
              {formik.errors.jobDescription}
            </small>
          ) : null}
        </div>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default FindTalentForm;
