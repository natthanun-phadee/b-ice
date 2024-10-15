import Link from "next/link";
import { Button,Typography } from "@mui/material";
import { Container } from "@mui/material";

export default function Page() {
  return (
    <Container>
      <Typography variant="h5" sx={{color: '#ccc', bgcolor: 'blue' }}>เกี่ยวกับเรา</Typography>
      
      <p>ชื่อ: นาย ณัฐนันท์ ผาดี</p>
      <p>รหัสนักศึกษา: 67319010005</p>
      <img src="https://mail.google.com/mail/u/0?ui=2&ik=c191bf8fa3&attid=0.1&permmsgid=msg-f:1809956579939042247&th=191e41eb7e25c3c7&view=att&disp=safe&realattid=191e41e61083395e6901" alt="1726109070743.png" />
     

      <p>ผู้จัดทำ: นาย ณัฐนันท์ ผาดี</p>
      
      <div>
        <Button component={Link} href="/" replace={true} variant="contained" color="success">กลับหน้าแรก</Button>
      </div>
     
    </Container>
  );
}