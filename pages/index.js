import Head from 'next/head';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'material-ui-image';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyVote</title>
        <meta name="description" content="MyVote homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{ marginTop: { xs: '1rem', sm: '2rem' } }}>
        <Grid container spacing={1} sx={{ minHeight: '85vh' }}>
          <Grid item xs={12} sm={5}>
            <Image
              src="/voter.png"
              imageStyle={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={7} align="center">
            <Typography
              variant="h5"
              textAlign="center"
              sx={{
                color: '#263238',
                fontWeight: '600',
                paddingTop: {
                  xs: '0rem',
                  sm: '0rem',
                  md: '2rem',
                  lg: '8rem',
                },
              }}
            >
              Are you a voter?
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              mb={2}
              sx={{
                color: '#37474f',
                fontWeight: '500',
                padding: { xs: '1rem' },
              }}
            >
              Anyone above the age of 18, who has verified their identity with
              the election commission.
            </Typography>
            <Button
              href="/voter"
              variant="outlined"
              sx={{ ':hover': { background: '#1976d2', color: 'white' } }}
            >
              Take me to polling station
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          sx={{
            minHeight: '85vh',
            marginTop: { xs: '5rem', sm: '0rem' },
          }}
        >
          <Grid item xs={12} sm={5}>
            <Image
              src="/electionComission.png"
              imageStyle={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={7} align="center">
            <Typography
              variant="h5"
              textAlign="center"
              sx={{
                color: '#263238',
                fontWeight: '600',
                paddingTop: { xs: '0rem', sm: '0rem', md: '2rem', lg: '8rem' },
              }}
            >
              Are you a part of the election commission?
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              mb={2}
              sx={{
                color: '#37474f',
                fontWeight: '500',
                padding: { xs: '1rem' },
              }}
            >
              Election officers are responsible for play the administrative role
              in the election.
            </Typography>
            <Button
              href="/electionCommission"
              variant="outlined"
              sx={{ ':hover': { background: '#1976d2', color: 'white' } }}
            >
              Take me to control room
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          sx={{ minHeight: '85vh', marginTop: { xs: '5rem', sm: '0rem' } }}
        >
          <Grid item xs={12} sm={5} mt={0}>
            <Image
              src="/results.png"
              imageStyle={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={7} align="center" sx={{ paddinTop: 0 }}>
            <Typography
              variant="h5"
              textAlign="center"
              mb={5}
              sx={{
                color: '#263238',
                fontWeight: '600',
                paddingTop: {
                  xs: '0rem',
                  sm: '0rem',
                  md: '2rem',
                  lg: '8rem',
                },
              }}
            >
              Want to see results?
            </Typography>
            <Button
              href="/result"
              variant="outlined"
              sx={{ ':hover': { background: '#1976d2', color: 'white' } }}
            >
              Take me to result section
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
