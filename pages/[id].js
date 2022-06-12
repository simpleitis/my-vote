import Vm from '../ethereum/vm';
import AadharCard from '../components/AadharCard';
import VotingCard from '../components/VotingCard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Voter(props) {
  const renderVotingCards = () => {
    return props.canidates.map((canidate, index) => {
      return (
        <VotingCard
          aadhar={props.aadhar}
          canidate={canidate}
          key={index}
          id={index + 1}
        />
      );
    });
  };
  return (
    <Container>
      <AadharCard aadhar={props.aadhar} />
      <Grid container spacing={2} mb={5}>
        {renderVotingCards()}
      </Grid>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const aadhar = context.params.id;
  const vm = Vm();
  const canidateCount = +(await vm.methods.canidateCount().call());

  var canidates = await Promise.all(
    Array(canidateCount)
      .fill()
      .map((element, index) => {
        var canidate = vm.methods.canidatesList(index).call();
        return canidate;
      })
  );
  canidates = await JSON.parse(JSON.stringify(canidates));

  return { props: { aadhar, canidates, canidateCount } };
}
