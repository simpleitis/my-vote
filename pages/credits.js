import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Credits() {
  return (
    <Container sx={{ background: 'black' }}>
      <Typography>
        <a href="https://www.freepik.com/psd/3d-girl">
          3d girl psd created by freepik - www.freepik.com
        </a>
      </Typography>
      <Typography>
        <a href="https://www.freepik.com/psd/3d-avatar">
          3d avatar psd created by jcomp - www.freepik.com
        </a>
      </Typography>
      <Typography>
        <a href="https://www.freepik.com/psd/3d-pie-chart">
          3d pie chart psd created by freepik - www.freepik.com
        </a>
      </Typography>
      <Typography>
        <a
          href="https://www.flaticon.com/free-icons/shapes-and-symbols"
          title="shapes and symbols icons"
        >
          Shapes and symbols icons created by Freepik - Flaticon
        </a>
      </Typography>
      <Typography></Typography>
    </Container>
  );
}
