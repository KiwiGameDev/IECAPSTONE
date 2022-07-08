import React from 'react'

import { StyledEngineProvider } from '@mui/material/styles';

import { Box, Typography, Link, Grid} from '@mui/material'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';

import { Theme } from '@mui/material'
import './page.css'
import {Gallery, Team} from '../../components'
import ReactPlayer from 'react-player'


//margin='0 6em' padding={'0 7em'} 

const itemData = [
  {
      text:'Chapter 1: Introduction',
      href: 'https://docs.google.com/document/d/1EvGqXF-J6fNouq6Dw71t0du1ONbla4YDGX-WMIM8PNk/edit#heading=h.szzdx0oxq19b',
  },
  {
    text:'Chapter 2: Review of Related Literature',
    href: 'https://docs.google.com/document/d/1EvGqXF-J6fNouq6Dw71t0du1ONbla4YDGX-WMIM8PNk/edit#heading=h.c1jmlu9dnhni',
},
{
  text:'Chapter 3: Theoretical Framework',
  href: 'https://docs.google.com/document/d/1EvGqXF-J6fNouq6Dw71t0du1ONbla4YDGX-WMIM8PNk/edit#heading=h.vwx3kklz4uvj',
},

{
  text: 'Chapter 4: System Architecture',
  href: 'https://docs.google.com/document/d/1EvGqXF-J6fNouq6Dw71t0du1ONbla4YDGX-WMIM8PNk/edit#heading=h.uv69wc8k55ue',
},

{
  text: 'Chapter 5: Design and Implementation',
  href: 'https://docs.google.com/document/d/1EvGqXF-J6fNouq6Dw71t0du1ONbla4YDGX-WMIM8PNk/edit#heading=h.mza6z3igt3y8',
},
{
  text: 'Chapter 6: Results and Discussion',
  href: 'https://docs.google.com/document/d/1EvGqXF-J6fNouq6Dw71t0du1ONbla4YDGX-WMIM8PNk/edit#heading=h.gp4yzqsuomsh',
},
{
  text: 'Chapter 7: Conclusion and Future Work',
  href: 'https://docs.google.com/document/d/1EvGqXF-J6fNouq6Dw71t0du1ONbla4YDGX-WMIM8PNk/edit#heading=h.vj4u8j4toyql',
},
];

const teamPics = [
  {
      img:'https://res.cloudinary.com/dlx2alkrl/image/upload/c_scale,h_500/v1657187282/iecap/289097064_553166136351120_843977060048039041_n_uyexh8.png',
      alt: 'bruce',
      text: 'Bruce Miranda'
  },
  {
      img:'https://res.cloudinary.com/dlx2alkrl/image/upload/c_scale,h_500/v1657183668/iecap/285803154_436749421435273_1661640367028901574_n_tiu3e3.png',
      alt: 'jacob',
      text: 'Jacob Manzano'
  },
  {
      img:'https://res.cloudinary.com/dlx2alkrl/image/upload/c_scale,h_500/v1657187326/iecap/290273874_604709460926414_1360098094770183102_n_ewpj91.jpg',
      alt: 'jaso',
      text: 'Jaso Santiago'
  },
  {
    img:'https://res.cloudinary.com/dlx2alkrl/image/upload/v1657187537/iecap/artworks-t7D8y2p7ipr7cEiz-bNHakQ-t500x500_mzql1h.jpg',
    alt: 'jc',
    text: 'Jan Carlo San Juan'
},

];


let theme = createTheme({
    typography: {
      h4: {
        fontWeight:'bold',
        fontFamily:'Montserrat',
      },
      body1: {
        fontWeight: 500,
        fontFamily:'Montserrat',
      },
      body2: {
        fontWeight: 100,
        fontFamily:'Montserrat',
        color: (115, 125, 130),
      },
    },
  });
theme = responsiveFontSizes(theme);


const Page = () => {

  return (
    <StyledEngineProvider injectFirst>

    
    <ThemeProvider theme={theme}>
    <Box sx={{ marginTop:'100px'}} className='Page_Main' px={{xs:7, sm:7, md:40}}>


    <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Team <br/><br/>
    </Typography>
    <Grid container spacing={2} justifyContent={'center'}>
    {
        teamPics.map((item,i) => (
          <Team src={item.img} alt={item.alt} text={item.text} key={i}>
          </Team>
        ))
      }
    </Grid>
      


            <Typography variant="h4"  className='Page_Body-Text' gutterBottom >   
                De La Salle University
             </Typography>

        <img src='https://res.cloudinary.com/dlx2alkrl/image/upload/v1655898193/iecap/logo_1_zvqjgg.png' alt='logo'/>

        <Box className='Page_Player'>
          <ReactPlayer controls url='https://youtu.be/691sJ57nHv8'/>
        </Box>

        
      <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Document Outline
         </Typography>

        { itemData.map( (item, i) => (
            <Box sx={{justifyContent:'center'}}>
              <Typography variant="body1"  className='Page_Body-Text-Document' gutterBottom textAlign={'justify'} href={item.href} component={Link}>
              {item.text} <br/> <br/>
              </Typography>
              </Box>
        ))}


        <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Abstract
         </Typography>
         <Typography variant="body1"  className='Page_Body-Text' gutterBottom textAlign={'justify'}>
         Manual content generation of complex systems is tedious and time consuming which 
         makes many projects that rely on the production of complex systems infeasible to do 
         and maintain. Procedural content generation (PCG) solves this problem by providing a 
         limitless source of generated content, but will always be only good at generating the 
         complex systems it was designed to generate. Because technology is starting to become 
         more accessible and efficient, countries have the opportunity to utilize and adapt these
          new technologies for the betterment of society. For example, cities can use computer-vision 
          to create surveillance systems to monitor the flow of traffic, making research for city planning 
          much easier. With simulations of tasks such as computer-vision requiring a large amount of synthetic 
          data, this makes procedural city generation important. There exists software that deals with city generation,
           with Parish and Müller’s CityEngine being the most influential of the ones publicly 
           available, most software only handles generation of generic cities. There is a lack of 
           study on city generation that is specialized to create cities based on a specific country.
            This paper proposes a system that is capable of  procedurally generating cities that attempts to closely mimic the aesthetics and qualities of Philippine cities.
      </Typography>

      <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Gallery 
        </Typography>
        <Gallery/>


        <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Testing Procedures
         </Typography>
         <Typography variant="body1"  className='Page_Body-Text' gutterBottom textAlign={'justify'}>
         Our training procedure is done in batches for each real-life reference image. The script that handles this is 
         located in ./scripts/testing/run.py. To successfully run the test, you need to have a folder within the same 
         directory named images. Inside it are two (2) subfolders: true and unreal. Inside true are your reference images. 
         The images inside need to follow a naming convention and need to be a png. The name of the images need to be m_(n).png 
         where n is sequentially numbered with how many you want to test. For example if you want to test three (3) reference 
         images, there will be m_1.png, m_2.png, and m_3.png. Inside unreal are the Seeds.txt file generated when generating
          from the application, and two (2) other folders: skewed and unskewed. Inside the skewed folder are the assisted-generation
           images and inside the unskewed folder are the non-assisted-generation images. Keep in mind that all of these images need 
           to be the same dimension. Once everything is correctly placed, you can then simply execute run.py.
      </Typography>


      <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Acknowledgements
         </Typography>
         <Typography variant="body1"  className='Page_Body-Text-Document' gutterBottom textAlign={'justify'}>
         We would like to acknowledge De La Salle University (DLSU), Sir Neil Patrick DelGallego, and Dr. Rafael Cabredo.
      </Typography>






    <Box container color={'green'} sx={{marginTop:'60px', marginBottom:'30px'}}>
      jan_carlo_sanjuan@dlsu.edu.ph <br/> bruce_anakin_miranda@dlsu.edu.ph  <br/>  jacob_v_manzano@dlsu.edu.ph  <br/>  jaso_santiago@dlsu.edu.ph
    </Box>

    </Box>
    </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Page