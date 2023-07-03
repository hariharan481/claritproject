import { Box, Button, Container, IconButton, Stack, Typography, createTheme, } from '@mui/material'
import React from 'react'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { ArrowDownwardOutlined, ArrowDropDownOutlined, Star } from '@mui/icons-material';
import Table from './Table';
import Table2 from './Table2';
import "../styles/Table1.css";
import { ThemeProvider } from 'styled-components'
import { CreateMUIStyled } from '@mui/styled-engine-sc';




export const Table1 = () => {



    const theme = createTheme({
        overrides: {
          MuiCssBaseline: {
            "@global": {
              "*::-webkit-scrollbar": {
                width: "5px"
              },
              "*::-webkit-scrollbar-track": {
                background: "#E4EFEF"
              },
              "*::-webkit-scrollbar-thumb": {
                background: "#1D388F61",
                borderRadius: "2px"
              }
            }
          }
        }
      });
    
  return (
    <div>

    <Stack direction={"row"} gap={"50px"} mt={"30px"
    }> 
    <Box sx={{
    display:"flex",
    height:"600px",
    width:"700px",
    

    }}>
<Box sx={{
    height:"35px",
    backgroundColor:"#2F3C90",
    width:"700px",
    textAlign:"left",
    color:"white",
    fontFamily:"monospace",
    boxShadow:"2px 2px  2px  2px  grey"



}}>
    <Typography variant="subtitle1" color={"white"} fontWeight={800} >Index Main Page</Typography>

<Box sx={{
    height:"60px",
    width:"600px",
    mt:"140px",
    marginLeft:"30px",
    gap:"30px",

}}>




<Stack direction={"column"}  sx={{mt:"32px",
    cursor:"pointer",gap:"30px", borderBottomColor:"3px solid black"
}}>
    <Typography variant="h6" fontWeight={600}  color="black"    sx={{mt:"-70px"
   
}}>
    
   <IconButton disableRipple disableFocusRipple>
     
    </IconButton>
     </Typography>
    <Typography variant="subtitle1" ml={"40px"} fontWeight={600} color="black" ></Typography>
<Typography variant="h6"  fontWeight={600} color="#000033"   sx={{
    
}} >  </Typography>
<Typography variant="subtitle1" ml={"40px"} color="#000033" ></Typography>
    
    
<Typography variant="h6"  fontWeight={600}  color="#000033" sx={{
     }} >  <IconButton disableRipple disableFocusRipple>
    
</IconButton></Typography>
<Typography variant='subtitle1' color="#000033"  fontWeight={600 } ml={"40px"}  > </Typography>
    
<Typography variant="h6" fontWeight={600} sx={{
     }} color="black"   >  </Typography>
<Typography variant="subtitle1" 
     color="black" fontWeight={600} ml={"40px"} ></Typography>
    </Stack>

</Box>



</Box>

    </Box>

    <Box sx={{
    display:"flex",
    height:"600px",
    width:"700px",
  

    }}>
<Box sx={{
    height:"35px",
    backgroundColor:"#2F3C90",
    width:"900px",
    textAlign:"left",
    color:"white",
    fontFamily:"monospace",
    boxShadow:"2px 2px  2px  2px  grey"

}}>
       <Typography variant="subtitle1" color={"white"} fontWeight={800} >Tabular Search</Typography>
    <Stack direction={"column"}  sx={{
    cursor:"pointer" ,mt:"100px"
}}>
 

<Stack direction={"row"} textAlign={"center"} sx={{
    cursor:"pointer"
}}>
    <Typography variant='h5' color={"#000033"} fontWeight={800}  sx={{ml:"140px",mt:"-60px",position:"absolute"
    
    }}>  Code details
    
    <Typography  variant="subtitle1" fontWeight={700} color={"GrayText"}  sx={{
        ml:"80px"
    }}>A00.0 cholera due  to vibrio cholera
    

    </Typography>
    </Typography>
    
   
    
   
    

    
    </Stack> 

    </Stack>
    <Box sx={{
    height:"40px",
    width:"900px",
    backgroundColor:"#2F3C90",
    display:"flex",
    mt:"40px",
    boxShadow:"2px 2px  2px  2px  grey",
    fontSize:"40px",
    gap:"40px"
    
   }}>
    <Typography variant="subtitle1" className='typ1' color={"white"} fontWeight={600}>Code notes</Typography>
    <Typography variant="subtitle1" className='typ1' color={"white"} fontWeight={600}>Section notes</Typography>
    <Typography variant="subtitle1" className='typ1' color={"white"} fontWeight={600}>Chapter notes</Typography>
    <Typography variant="subtitle1"  className='typ1'color={"white"} fontWeight={600}>Chapter guidelines</Typography>
  




   </Box>
  
   <Box  sx={{
     height:"400px",
     width:"900px",
    
     display:"flex",
     mt:"40px",
     boxShadow:"2px 2px  6px  2px  grey",
     fontSize:"40px",
     gap:"40px",
    
   }}>

<Stack direction={"column"} >

<Typography variant="subtitle1" fontWeight={600}  color={"GrayText"} >Inclusion term(s)</Typography>
<Typography variant="subtitle1" fontWeight={600} color={"GrayText"} >Classical Cholra</Typography>

<Table/>

</Stack>


   </Box>
   
   <Box className="scroll" sx={{
    height:"250px",
    width:"900px",
    color:"black",
mt:"80px",


gap:"40px",
boxShadow:"2px  2px  6px 2px grey",



}}>
    <Stack gap={"20px"}>
    <Typography variant="subtitle1" color="blue"  sx={{
    
}} fontWeight={600}>Hcc:</Typography>

<Typography variant="subtitle1" color="blue"  sx={{
    
}} fontWeight={600}>Back reference:</Typography>
<Typography variant="subtitle1" color="blue" sx={{
    
}} fontWeight={600}>Alert:



</Typography>

<Typography variant="subtitle1" color="blue" sx={{
    
}} fontWeight={600}>Clinical definition:</Typography>
<Typography variant="subtitle1"color="blue" sx={{

}} fontWeight={600}>Code history:</Typography>

</Stack>
</Box>
    

   
</Box>



    </Box>
    {/*<Box sx={{
        height:"700px",
        width:"400px",
        backgroundColor:"red",
    }}>




    </Box>
    <Box sx={{
        height:"250px",
        backgroundColor:"#e6e6ff",
        display:"flex",
        width:"1300px",
        
        ml:"120px"
    }}> 
<Box sx={{
    height:"35px",
    backgroundColor:"#3333ff",
    width:"500px",
    
    
    textAlign:"left",
    color:"white",
    fontFamily:"monospace"


}}>

  
    <Typography variant="subtitle1" color={"white"} fontWeight={800} >*****Tablular Search</Typography>
    <Box sx={{
    height:"100px",
    width:"100px",
    borderRadius:"100px",
    backgroundColor:"#9999ff",
    mt:"40px",
    ml:"30px"
}}>
    <IconButton disableRipple disableFocusRipple sx={{
        fontSize:"180px",
        
        
    }}>
        
        <VaccinesIcon sx={{
            fontSize:"80px",
            color:"blue"
        }}  />
        
    </IconButton>
    
</Box>
<Stack direction={"row"} textAlign={"center"} sx={{
    cursor:"pointer"
}}>
    <Typography variant='h4' color={"#000033"} fontWeight={800} fontFamily={"cursive"} sx={{ml:"180px",mt:"-70px"
    
    }}>Find Your Code details</Typography>
    </Stack> 
    
    <Table/>
    <Button variant="contained"  disableFocusRipple  disableTouchRipple disableElevation sx={{
        border:"black",
        color:"white",
        ml:"800px",
        mt:"-40px"
        
    }}> Detaild Codes
    
    
    </Button>
    <IconButton sx={{
        mt:"-40px",
    }}>
        <Star sx={{
            color:"blue",
            fontSize:"30px"
        }}/>
    </IconButton>
    <Box sx={{
       width:"1000px",
        background:"white",
        display:"flex",
        ml:"270px",
        textDecoration:"none",
        mt:"20px",
    }}>


<Stack direction={"row"} gap={"30px"} > 

<Typography variant="body1" color={"#2D172E"} fontWeight={"700"}>Choker notes</Typography>
<Typography variant="body1"color={"#2D172E"} fontWeight={"700"}>Section notes</Typography>
<Typography variant='body1' color={"#2D172E"} fontWeight={"700"}>Chapter notes</Typography>
<Typography variant="body1" color={"#2D172E"} fontWeight={"700"}>Chapter guidelines</Typography>
</Stack>

    </Box>
   

    <Box sx={{
        height:"30px",
        width:"100px",
        backgroundColor:"red",
        border:"1px solid black",
        color:"white"
    }}>
<Typography variant='h5'></Typography>
    </Box>
</Box>

</Box>
*/}
</Stack>


    </div>
  )
}
