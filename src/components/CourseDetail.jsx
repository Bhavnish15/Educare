import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import highway from '../assets/Videos/highway.mp4';

const CourseDetail = () => {
    
  const lectureTitle = 'LectureTitle';
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'svsd',
      title: 'sample1',
      description: 'sample description this is fvscv vsdvsd svfbs bfbas',
      video: {
        url: 'dvdsdvfsv',
      },
    },
    {
      _id: 'cdscsscsv2',
      title: 'sample2',
      description: 'sample description this is fvscv vsdvsd svfbs bfbas',
      video: {
        url: 'dvdsdvfsv',
      },
    },
    {
      _id: 'vssscsv3',
      title: 'sample3',
      description: 'sample description this is fvscv vsdvsd svfbs bfbas',
      video: {
        url: 'dvdsdvfsv',
      },
    },
    {
      _id: 'sdvs4',
      title: 'sample4',
      description: 'sample description this is fvscv vsdvsd svfbs bfbas',
      video: {
        url: 'dvdsdvfsv',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          src={highway}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>

        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Text m={'4'} children={'gfdcdscacassdc'} />
        <Heading m={'4'} children={`${lectures[lectureNumber].description}`} />
      </Box>

      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CourseDetail;
