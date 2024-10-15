'use client'
import { Container } from "@mui/material";
type AppLogoProps ={
  title: string 
  color: string
  

}
export default function AppLogo({title ,color}:AppLogoProps) {
    const subTitle = 'it suphan';
    const dateNow = new Date()
    const timeNow = <p>{dateNow.toLocaleTimeString()}</p>
    const isShow = true
    const isShowDate = false
    const onhandleClick = ()=>{
      alert("Click Me!!!!")
    }
  return (
    <main>
      <p style={{color: color}}>{title}</p>
      <button onClick={onhandleClick}>Click Me!!!!</button> {  ' '  }
      <small>{subTitle.toUpperCase()}</small>
      {' '}
      <small>{dateNow.toLocaleDateString()}</small>
      {' '}
      {
        isShow && <div>ขณะนี้เวลา: {timeNow}</div> 
      }
      {
        isShowDate ? <small>{dateNow.toLocaleDateString()}</small> : 
        <small>{timeNow}</small>
      }
    </main>
  );
}