import Link from "next/link";
import { Container } from "@mui/material";
export default function Page() {
  return (
    <Container>
      <p>ชื่อ: นาย ณัฐนันท์ ผาดี</p>
      <p>อายุ: 17ปี</p>
      <p>วัน/เดือน/ปีเกิด: 22/8/2549</p>
      <p>แผนก: อิเล็กทรอนิกส์</p>
      <p>สาขา: สารสนเทศ,นักพัฒนาซอฟแวร์คอมพิวเตอร์</p>
      <Link href={'../'}>Main Page</Link>
      {' '}<br></br>
      <Link href={'../abount'}>Abount</Link>
      {' '}<br></br>
      
    </Container>
  );
}