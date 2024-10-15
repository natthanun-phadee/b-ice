import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import Image from 'next/image'
export default function ContactPage() {
  return (
    <Container>
      <Typography variant="h3">สถานที่ท่องเที่ยว</Typography>
      <p>พูดถึงขุนแผนก็ต้องนึกถึงจังหวัดสุพรรณบุรีซึ่งมีเรื่องราวเกิดขึ้นที่นี่ตามท้องเรื่องที่มีการกล่าวถึง จึงได้มีการสร้างเรือนไทยภาคกลางแบบดั้งเดิมแล้วจำลองบรรยากาศพร้อมตกแต่งด้วยข้าวของเครื่องใช้แบบโบราณต่างๆ จัดแสดงไว้ อีกทั้งยังมีรูปจำลองขุนแผนตั้งโดดเด่นเป็นสง่าอยูหน้าเรือนอีกด้วย</p>
      <p>วันและเวลาเปิด-ปิด: ทุกวัน ตั้งแต่เวลา 08.00-17.00 น.
      </p>
      <Image
        src="/src\app\(main-website)\1.-คุ้มขุนแผน-01-800x534.webp.png"
        alt="Picture of the author"
        width={500}
        height={500}
/>

    </Container>
    
  );
  
}