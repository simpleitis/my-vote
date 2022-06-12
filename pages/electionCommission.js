import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import web3 from '../ethereum/web3';
import Vm from '../ethereum/vm';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Image from 'material-ui-image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ElectionCommission() {
  const [field2, setField2] = useState('DOB');
  const [field3, setField3] = useState('Account');
  const [field4, setField4] = useState('Aadhar');
  const [title, setTitle] = useState('voter');
  const [switchText, setSwitchText] = useState('canidate');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [field2Data, setfield2Data] = useState(null);
  const [field3Data, setfield3Data] = useState('');
  const [field4Data, setfield4Data] = useState('');

  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    const vm = Vm();
    setLoading(true);
    // setErrorMessage('');

    if (title == 'voter') {
      try {
        const accounts = await web3.eth.getAccounts();
        await vm.methods
          .addVoter(
            name,
            field2Data.toLocaleDateString('es-CL'),
            field3Data,
            field4Data
          )
          .send({ from: accounts[0] });
        toast.success('Voter added', {
          theme: 'colored',
        });
      } catch (err) {
        // setErrorMessage(err.message)
        toast.error('Error', {
          theme: 'colored',
        });
      }
      setLoading(false);
    } else {
      try {
        const accounts = await web3.eth.getAccounts();
        await vm.methods
          .addCanidate(name, field3Data)
          .send({ from: accounts[0] });
        toast.success('Canidate added', {
          theme: 'colored',
        });
      } catch (err) {
        toast.error('Error', {
          theme: 'colored',
        });
      }
      setLoading(false);
    }
  };

  function handleSwitch() {
    if (title === 'voter') {
      setTitle('canidate');
      setField2('none');
      setField3('Party');
      setField4('none');
      setSwitchText('voter');
      setName('');
      setfield3Data('');
    } else {
      setField2('DOB');
      setField3('Account');
      setField4('Aadhar');
      setTitle('voter');
      setSwitchText('canidate');
      setName('');
      setfield2Data(null);
      setfield3Data('');
      setfield4Data('');
    }
  }

  return (
    <>
      <Head>
        <title>MyVote</title>
        <meta name="description" content="MyVote homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid container spacing={2} alignContent="center">
          <Grid
            item
            xs={12}
            sm={8}
            md={4}
            ml={{ xs: '0', sm: 'auto', md: '8px' }}
            sx={{ marginTop: '10%' }}
          >
            <Typography
              variant="h5"
              mb={2}
              sx={{ color: '#3f3d56', fontWeight: '500' }}
            >
              {`Enter ${title} details`}
            </Typography>
            <Box sx={{ flexGrow: 1 }} component={'form'} onSubmit={onSubmit}>
              <TextField
                value={name}
                onChange={(event) => setName(event.target.value)}
                label="Name"
                variant="outlined"
                fullWidth
                autoComplete="off"
                error={!!errorMessage}
                helperText={errorMessage}
                id="standard-error-helper-text"
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label={field2}
                  value={field2Data}
                  onChange={(newValue) => setfield2Data(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      autoComplete="off"
                      fullWidth
                      sx={{ marginTop: '1rem', display: field2 }}
                    />
                  )}
                />
              </LocalizationProvider>

              <TextField
                value={field3Data}
                onChange={(event) => setfield3Data(event.target.value)}
                label={field3}
                variant="outlined"
                fullWidth
                autoComplete="off"
                error={!!errorMessage}
                helperText={errorMessage}
                id="standard-error-helper-text"
                sx={{ marginTop: '1rem', display: field3 }}
              />
              <TextField
                value={field4Data}
                onChange={(event) => setfield4Data(event.target.value)}
                label={field4}
                variant="outlined"
                fullWidth
                autoComplete="off"
                error={!!errorMessage}
                helperText={errorMessage}
                id="standard-error-helper-text"
                sx={{ marginTop: '1rem', display: field4 }}
              />
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                endIcon={<SendIcon />}
                sx={{ marginTop: '1rem' }}
              >
                Enter
              </LoadingButton>

              <Button
                onClick={handleSwitch}
                disableRipple
                sx={{
                  whiteSpace: 'noWrap',
                  color: '#1976d2',
                  fontSize: '1rem',
                  textTransform: 'none',
                  display: 'block',
                  marginTop: '1rem',
                  paddingLeft: 0,
                  ':hover': { backgroundColor: 'white' },
                }}
              >
                {`Want to register a ${switchText}?`}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={4} sx={{ margin: 'auto' }}>
            <Image src="/details.svg" width="2rem" />
          </Grid>
        </Grid>
      </Container>
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
    </>
  );
}
