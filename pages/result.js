import Vm from '../ethereum/vm';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Container from '@mui/material/Container';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Result(props) {
  const data = {
    labels: ['Eren(BJP)', 'Erwin(LDF)', 'Levi(UDF)'],
    datasets: [
      {
        label: 'Votes',
        data: props.canidateVoteCount,
        backgroundColor: [
          'rgba(255, 206, 86)',
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
        ],
        borderColor: [
          'rgba(255, 206, 86)',
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container sx={{ marginTop: '5rem' }}>
      <Doughnut
        data={data}
        height={500}
        width={600}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
}

export async function getServerSideProps() {
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

  let canidateVoteCount = [];
  canidates.map((canidate) => {
    canidateVoteCount.push(canidate.vote);
  });

  return { props: { canidateVoteCount } };
}
