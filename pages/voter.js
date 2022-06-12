import { useRouter } from 'next/router';
import { useState } from 'react';
import Vm from '../ethereum/vm';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Container from '@mui/material/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Voter() {
  const [aadhar, setAadhar] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    const vm = Vm();
    setLoading(true);

    try {
      const voter = await vm.methods.votersList(aadhar).call();
      if (voter.aadhar != '0') {
        router.push(`/${aadhar}`);
      } else {
        toast.error('You are not a registered voter', {
          theme: 'colored',
        });
      }
    } catch (err) {
      toast.error('Server Error', {
        theme: 'colored',
      });
    }
    setLoading(false);
  };

  return (
    <Container>
      <Box
        component={'form'}
        m="auto"
        mt={20}
        sx={{
          maxWidth: '100%',
        }}
      >
        <TextField
          value={aadhar}
          onChange={(event) => setAadhar(event.target.value)}
          fullWidth
          autoComplete="off"
          placeholder="Enter aadhar number"
          sx={{ borderRadius: '5rem' }}
        />
        <LoadingButton
          variant="contained"
          loading={loading}
          onClick={onSubmit}
          sx={{
            marginTop: '1rem',
            marginBottom: '50%',
            ':hover': { backgroundColor: '#006bde', color: 'white' },
          }}
        >
          Search
        </LoadingButton>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Box>
    </Container>
  );
}
