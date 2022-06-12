import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (
    <div style={{ display: 'flex' }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography
              sx={{ flexGrow: 1, ':hover': { backgroundColor: 'white' } }}
            >
              <Button
                align="right"
                disableRipple
                startIcon={
                  <Avatar
                    src="logo.png"
                    variant="square"
                    sx={{ width: 40, height: 40 }}
                  />
                }
                sx={{ ':hover': { backgroundColor: 'white' } }}
              >
                <Typography
                  sx={{
                    color: '#1276d1',
                    textTransform: 'none',
                    fontSize: {
                      xs: '2.5rem',
                    },
                    paddingTop: '0.6rem',
                    margin: 0,
                    fontFamily: 'Hind Siliguri',
                    fontWeight: '700',
                    borderBlockColor: 'white',
                    ':hover': { backgroundColor: 'white' },
                  }}
                >
                  MyVote
                </Typography>
              </Button>
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
