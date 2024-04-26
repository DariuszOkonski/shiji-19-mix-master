import { Form, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await axios.post(newsletterUrl, data);
  toast.success(response.data.msg);
  return redirect('/');
};

const Newsletter = () => {
  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='form-input'
          defaultValue='john'
          required
        />
      </div>

      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          className='form-input'
          defaultValue='smith'
          required
        />
      </div>

      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          id='email'
          name='email'
          className='form-input'
          defaultValue='test@test.com'
          required
        />
      </div>

      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </Form>
  );
};

export default Newsletter;
