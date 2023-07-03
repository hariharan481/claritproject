import { Autocomplete, Box, Container, Divider, Icon, IconButton,  Stack, TextField, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import Table from './Table';
import"../styles/Search.css";
import { SearchOffOutlined, SearchOutlined } from '@mui/icons-material';





const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "option1", label: "2023" },
    { value: "option2", label: "2022" },
    { value: "option3", label: "2021" },
    { value: "option3", label: "2020" },
    { value: "option3", label: "2019" },
    { value: "option3", label: "2018" },
    { value: "option3", label: "2017" },
    { value: "option3", label: "2016" },
  ];
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };



//  const [result, setResult] = useState([]);
  //const[first,setfirst]=useState("");
  const[open,setOpen]=useState(false)
  //const [count, setCount] = useState("");

  const [result, setResult] = useState([]);
 
  const [first, setfirst] = useState("");
  const [word, setword] = useState("");
  function handlechange(e){
  setword(e.target.value);
  }
  console.log(word);
 
 
 // const fetchBooks = async () => {
   // const res = await fetch(`codes/allSearch/${count}`);
    //console.log(res);
    //const json = await res.json();
    //console.log(json);
    
   // setResult(json);
  
  //}   
  //console.log(count)                                                                                                  
  //useEffect(() => {
//console.log("our count is"+count)
    //fetchBooks()
 
    
  //}, [])
  //console.log("our result is", result);

  const datas=[2018,2019,2020,2021,2022,2023,2024]
  global.values=first;
  console.log(first)


  //const handleSearchClick = () => {
//fetchBooks()// Call the function to fetch data from the API
 //};


 useEffect(() => {
  const fetchBooks = async () => {
    try {
      const response = await fetch(`/codes/allSearch/${word}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  fetchBooks();
}, [word]);
  console.log("our result is", result);
console.log(first)
global.values=first;

  return (
    <>
    <Box sx={{
        height:"100px", 
    } }>
      
<Box sx={{
    height:"80px",
    position:"static",
 
    width:"1630px",
    paddingRight:"80px",
    ml:"-30px",
    backgroundColor:"#3333ff"
}}> 


 <Stack direction={"row"} ml={40} mt={1} gap={3} > 
  {/* <Box sx={{
  height:"30px",
  width:"80px",
  color:"grey",
  fontSize:"16px",
  position:"absolute",
  marginLeft:"1400px",
  cursor:"pointer",
  mt:"25px",
  


 }}> 

<Typography variant='span' fontWeight={600} color={"blue"} sx={{
  
  
  borderBottom:"1px solid black"
}} >Help</Typography>
<Typography variant='span'  fontWeight="600"color={"blue"} sx={{
  
  
  borderBottom:"1px solid black",ml:"10px",
}} >Date</Typography>

 </Box>
*/}  
 {/* 
<div className='Yearcontainer'> 
      <select name="cars" id="cars" placeholder='select Year' className='searchcontainer2' >
        <option  selected disabled>select year</option>
         
  <option  >2016</option>
  <option   >2017</option>
  <option  >2018</option>
  <option >2019</option>
  <optio
  n  >2020</optio>
 
</select>
</div>
*/}
<div className="dropdown">
          <button
            className="dropdown__toggle"
            onMouseEnter={() => setIsOpen(true)}
            onClick={toggleDropdown}
          >
            {selectedOption ? selectedOption.label : "Year"}
          </button>
          {isOpen && (
            <ul className="dropdown__menu">
              {options.map((option) => (
                <li
                  key={option.value}
                  className="dropdown__menu-item"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option.label}</span>
                  <span className="dropdown__menu-item-description">
                    {option.description}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>


      
    

<datalist id="datas">
         {datas.map((op)=><option>{op}</option>)}
      </datalist>

{/*<div class="dropdown3">
  <button class="dropbtn" onChange={onchange}>Dropdown</button>
  <div class="dropdown-content" onClick={e => setCount(e.target.value)}>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>*/}
      
      <Fragment>
      <Autocomplete className='user'
        disableCloseOnSelect
     
        disablePortal
        id="users"
        defaultValue={null}
        getOptionLabel={(result) => `${result.id} ${result.description}`}
        options={result}
 sx={{ width: "1000px" , color: "blue", backgroundColor: "white" ,display:"flex",mt:"20px",height:"44px",ml:"30px",

 
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',


  },
  "& .MuiOutlinedInput-root": {
    // border: "1px solid yellow",
    borderRadius: "0",
    padding: "0",
    border:"none"
},
"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "none"
}


}}




        isoptionEqualToValue={(option, value) =>
          option.id === value.id
        }
    
        noOptionsText={"PLEASE ENTER VALID CODES"}
        open={open}


        popupIcon={<SearchOutlined sx={{
          position:"fixed"
        }}/>}
        onInputChange={(_, value) => {
          if (value.length === 0) {
            if (open) setOpen(false);
          } else {
            if (!open) setOpen(true);
          }
        }}
        onClose={() => setOpen(false)}
      
        onChange={(event, newValue) => {
          setfirst(newValue)
       }}
       autoSelect



       renderOption={(props, result) => {
        const input = word.toLowerCase();
        const lowerCaseId = result?.id?.toLowerCase() || '';
      const lowerCaseDescription = result?.description?.toLowerCase() || '';
        const idStartIndex = lowerCaseId.indexOf(input);
        const idEndIndex = idStartIndex + input.length;
        const descriptionStartIndex = lowerCaseDescription.indexOf(input);
        const descriptionEndIndex = descriptionStartIndex + input.length;
        const highlightedId =
          idStartIndex !== -1 && idEndIndex !== -1 ? (
            <Box
              component="span"
              sx={{
                color: "black",
              
              }}
            >
              {result.id.slice(0, idStartIndex)}
              <Box
                component="span"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {result.id.slice(idStartIndex, idEndIndex)}
              </Box>
              {result.id.slice(idEndIndex)}
            </Box>
          ) : (
            result.id
          );
        const highlightedDescription =
          descriptionStartIndex !== -1 && descriptionEndIndex !== -1 ? (
            <Box
              component="span"
              sx={{
                color: "black"
              
              }}
            >
              {result.description.slice(0, descriptionStartIndex)}
              <Box
                component="span"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {result.description.slice(descriptionStartIndex, descriptionEndIndex)}
              </Box>
              {result.description.slice(descriptionEndIndex)}
            </Box>
          ) : (
            result.description
          );
        return (
          <Box {...props} key={result.id}>
            {highlightedId} {highlightedDescription}
          </Box>
        );
      }}












      // renderOption={(props, result) => (
          //<Box sx={{ color: "black", backgroundColor: "white" ,fontSize:"14px" }} {...props} key={result.id}>
          //// {result.id} {result.description}
//</Box>   
  //    )} 




        renderInput={(parms) => <TextField  {...parms} onChange={handlechange} label="Search for code"  />}
      />
      </Fragment>










     {/*
      <Fragment>



        
      <Autocomplete   className="searchcontainer" disableListWrap aria-disabled  disableFocusRipple  disableTouchRipple
        id="users"
        defaultValue={null}
        getOptionLabel={(result) => `${result.id} ${result.description}` }
        options={result}
    disableCloseOnSelect
     
    disablePortal
    
   
        
        isoptionEqualToValue={(option, value) =>
          option._id === value._id
        }
        noOptionsText={"PLEASE ENTER VALID CODES" }
        
        open={open}
       onInputChange={(_, value) => {
          if (value.length === 0) {
            if (open) setOpen(false);
          } else {
            if (!open) setOpen(true);
          }
        }}
        onClose={() => setOpen(false)}
        onChange={(event, newValue) => {
          setfirst(newValue)
       }}
       
       autoSelect
       renderOption={(props, result) => (
        
          <Box   sx={{ color: "blueviolet", backgroundColor: "white",borderRadius:"40px" }} {...props} key={result.id}>
           {result.id} {result.description}
        </Box>
   
          
       )}
        renderInput={(parms) => <TextField  onChange={(e)=>setCount(e.target.value)} value={count}  variant="outlined"  {...parms}  sx={{outline:"none",border:"none"
          
    ,color:"black",
    fontWeight:"900px", 
    
    
    
    }}  />}      />
     
      </Fragment>
  */}



  
    </Stack>
   
    
    </Box>
    
    
    
  
    
 
    </Box>


    </>
  )
}

export default Search













