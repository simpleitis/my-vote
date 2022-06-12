import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import web3 from '../ethereum/web3';
import Vm from '../ethereum/vm';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function votingCard(props) {
  const vm = Vm();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const timeout = () => {
    router.push('/');
  };

  const handleClick = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const accounts = await web3.eth.getAccounts();
      await vm.methods
        .vote(props.aadhar, props.id - 1)
        .send({ from: accounts[0] });
      toast.success('Your vote has been recorded', {
        theme: 'colored',
      });
      setTimeout(timeout, 4000);
    } catch {
      toast.error('Error', {
        theme: 'colored',
      });
    }

    setLoading(false);
  };

  return (
    <Grid item xs={12} sm={4}>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={`canidate${props.id}`}
          height="300"
          image={`canidate${props.id}.jpg`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.canidate.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Party: {props.canidate.party}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            size="small"
            sx={{
              ml: 1,
              backgroundColor: '#006bde',
              color: 'white',
              ':hover': {
                backgroundColor: 'white',
                color: '#006bde',
              },
            }}
          >
            Vote
          </LoadingButton>
        </CardActions>
      </Card>
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
    </Grid>
  );
}
