import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

// const SITE_KEY = '6LcvGXImAAAAAFKFlIa97Kpliym_MF3nDQVVLCVR';
// const SECRET_KEY = '6LcvGXImAAAAAFjNupSbCnFXwu8J18T9f_AV7bMe';

// const SITE_KEY = '6LebPXImAAAAAKYax013SRG3gsT3AxnJoU7u-Pyh';
// const SECRET_KEY = '6LebPXImAAAAACMv56oSieWyeGCdUYVhCltZCAjE';

const SITE_KEY = '6LehtnImAAAAABcaXR1XRmtM4Aa02eU2sgwerRL0';
const SECRET_KEY = '6LehtnImAAAAAK-axOBybvZZUUGaOxLm-RYcLq-Y';

// const SITE_KEY = '6LeMg3MmAAAAAEaggqKomYVofB4afBczDAFLH5cL';
// const SECRET_KEY = '6LeMg3MmAAAAAP1ixygGwH7wj6q_nlc-XEbBuEJs';

export default function App() {
  // const [file, setFile] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');
  // console.log('File: ', file);

  // const upload = async () => {
  //   setIsLoading(true);
  //   try {
  //     const formData = new FormData();
  //     formData.append('image', file);
  //     // const res = await axios.post('http://124.29.235.10:3000/api/v1/images/upload', formData, {
  //     const res = await axios.post('http://3.23.130.49:3000/api/v1/images/upload', formData, {
  //       headers: {
  //         // "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ1M2JmODJmNDBjZTc2OTljN2UyODVjIiwiZXhwIjoxNjg0MzIyNjY2MjMsImlhdCI6MTY4NDMyMjY2Nn0.r3JZ2tfoyg2f6adZYxKLyk-scAl0ezO7uJWwIvBw_zs`,
  //       },
  //     });
  //     setIsLoading(false);

  //     console.log(res);
  //   } catch (error) {
  //     console.log(`Error: ${error.message}`);
  //     setIsLoading(false);
  //     setError(error.message);
  //   }
  // };

  const [name, setName] = useState('');
  const captchaRef = useRef(null);

  function onChange(token) {
    console.log('Captcha token:', token);
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = captchaRef.current.getValue();
      console.log({ token, name });
      // if (window && window.gtag) {
      //   window.gtag('event', 'recaptcha_success', {
      //     event_category: 'reCAPTCHA',
      //     event_label: 'User successfully completed reCAPTCHA',
      //     value: 1,
      //     send_to: 'G-BRD41P1SGT',
      //   });
      // }

      // if (token) {
      const response = await axios({
        method: 'post',
        url: `http://localhost:8000/verify-token`,
        data: { token, name },
      });

      console.log({ response });
      // }

      captchaRef.current.reset();
    } catch (error) {}
  };

  return (
    <div className='App'>
      {/* {error && error}
      {isLoading ? 'Loading...' : ''}
      <input
        type='file'
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={upload}>Upload</button> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        {/* <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange}  /> */}
        <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}
