import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = '6LcvGXImAAAAAFKFlIa97Kpliym_MF3nDQVVLCVR';
const SECRET_KEY = '6LcvGXImAAAAAFjNupSbCnFXwu8J18T9f_AV7bMe';

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

  function onChange(token) {
    console.log('Captcha token:', token);
  }

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

      <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} />
    </div>
  );
}
