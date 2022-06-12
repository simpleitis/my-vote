import Vm from '../ethereum/vm';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import useSWR from 'swr';

export default function AadharCard(props) {
  const vm = Vm();

  const fetcher = async (...args) =>
    await vm.methods.votersList(...args).call();
  const { data, error } = useSWR(props.aadhar, fetcher);

  return (
    <Grid container spacing={0} mt={5} mb={10}>
      <Grid item xs={12} sm={5}>
        <Card
          sx={{
            maxWidth: { xs: 350 },
            background: `url(${'/aadhar.webp'})`,
          }}
        >
          <CardHeader
            action={
              <IconButton href="/voter">
                <EditIcon sx={{ color: 'white' }} />
              </IconButton>
            }
            sx={{ color: 'white' }}
            title="Aadhar Card"
          />
          <CardContent>
            <Typography sx={{ mb: 1 }} color="white">
              Name: {data ? data.name : 'Loading...'}
            </Typography>
            <Typography sx={{ mb: 2 }} color="white">
              DOB: {data ? data.dob : 'Loading...'}
            </Typography>
            <Typography
              variant="h5"
              sx={{ display: 'flex', justifyContent: 'center' }}
              color="white"
            >
              {`${props.aadhar.slice(0, 4)} ${props.aadhar.slice(
                4,
                8
              )} ${props.aadhar.slice(8, 12)}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
