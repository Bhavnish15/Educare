import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register';

const CourseModel = ({
  isOpen,
  onClose,
  id,
  deleteHandler,
  courseTitle,
  addLectureHandler,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8, 9],
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoPrev, setVideoPrev] = useState('');
  const [video, setVideo] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const handleCloseHandler = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handleCloseHandler}
      scrollBehavior="inside"
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={'16'}>
            <Grid templateColumns={['1fr', '3fr 1fr']}>
              <Box px={['0', '16']}>
                <Box my={5}>
                  <Heading children={title} />
                  <Heading children={`#${id}`} opacity={0.4} size={'sm'} />
                </Box>
                <Heading children={'Lectures'} size={'lg'} />
                {/* Video Component */}
                {lectures.map((item, i) => (
                  <VideoCard
                    key={i}
                    title={courseTitle}
                    num={i + 1}
                    description="This is Important topic in reactJs"
                    lectureId="dsvs"
                    courseId={id}
                    deleteHandler={deleteHandler}
                  />
                ))}
              </Box>
              <Box>
                <form
                  onSubmit={e =>
                    addLectureHandler(e, id, title, description, video)
                  }
                >
                  <VStack spacing={'4'}>
                    <Heading
                      children="Add Lectures"
                      size={'md'}
                      textTransform={'uppercase'}
                    />
                    <Input
                      focusBorderColor="purple.300"
                      placeholder="Title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                      focusBorderColor="purple.300"
                      placeholder="Description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />

                    <Input
                      accept="video/mp4*"
                      required
                      type={'file'}
                      focusBorderColor="purple.300"
                      css={{
                        '&::file-selector-button': {
                          ...fileUploadCss,
                          color: 'purple',
                        },
                      }}
                      onChange={changeVideoHandler}
                    />
                    {videoPrev && (
                      <video
                        controlsList="nodownload"
                        controls
                        src={videoPrev}
                      ></video>
                    )}
                    <Button w={'full'} colorScheme="purple" type="submit">
                      Add Leture
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseHandler}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CourseModel;

const VideoCard = ({
  title,
  num,
  description,
  lectureId,
  courseId,
  deleteHandler,
}) => {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'10'}
      boxShadow={'0 0 10px rgba(107, 70, 193, 1)'}
      justifyContent={['flex-start', 'space-between']}
      padding={['4', '8']}
    >
      <Box>
        {' '}
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color="purple.600"
        onClick={() => deleteHandler(lectureId, courseId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
};
