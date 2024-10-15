'use client'


import React from "react";
import AppBar  from "@mui/material/AppBar";
import Toolbar  from "@mui/material/Toolbar";
import Typography  from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NextLink from 'next/link'
import path from "path";

import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
import { Container } from "@mui/material";


export default function AppHeader() {
  const pathname = usePathname();
  return (
    <Container>
      <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{borderBottom: (theme)=> `1px solid ${theme.palette.divider}`}}

      >
        <Toolbar>
       
       <Typography variant="h6" color="inherit" noWrap sx={{flexGrow:1}}>
          
        </Typography>
        <nav>
          
          <Link
          underline={pathname == "/"?"always" : "none"}
          component={NextLink}
          variant="button"
          color="primary"
          href="/"
          replace
          sx={{my:1, mx: 1.5}}
          >
          
          หน้าหลัก
          </Link>

          <Link
          underline={pathname == "/abount"?"always" : "none"}
          component={NextLink}
          variant="button"
          color="primary"
          href="/abount"
          replace
          sx={{my:1, mx: 1.5}}
          
          >
          
          
          เกี่ยวกับเรา
          </Link>

          <Link
          underline={pathname == "/contact"?"always" : "none"}
          component={NextLink}
          variant="button"
          color="primary"
          href="/contact"
          replace
          sx={{my:1, mx: 1.5}}
          >
          
          สถานที่ท่องเที่ยว
          </Link>

          <Link
          underline={pathname == "/product"?"always" : "none"}
          component={NextLink}
          variant="button"
          color="primary"
          href="/product"
          replace
          sx={{my:1, mx: 1.5}}
          >
          
          อำเภอ
          </Link>
        </nav>
        <Button 
         LinkComponent={NextLink}
         href="/login"
         variant="outlined"
         sx={{my:1, mx:1.5}}
         >
         
        </Button>
        </Toolbar>

      </AppBar>
    </Container>
  );
}