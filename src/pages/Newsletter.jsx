import React from 'react';

const Newsletter = () => {
  return (
    <form className='form'>
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
        />
      </div>

      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </form>
  );
};

export default Newsletter;
