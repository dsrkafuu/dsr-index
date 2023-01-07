import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie || '',
    },
  };
};

import styles from './index.module.scss';
import {
  Card,
  Flex,
  Heading,
  Text,
  IconButton,
  ButtonGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
  FaBlog,
  FaCompactDisc,
  FaGithub,
  FaSteam,
  FaTwitter,
} from 'react-icons/fa';
import SakanaWidget from '../components/SakanaWidget';
import { reportClick } from '../utils/analytics';
import avatarImage from '../assets/dsrkafuu_1280p.jpg';
import Head from 'next/head';

function Home() {
  const cardBg = useColorModeValue('white', 'whiteAlpha.300');

  return (
    <>
      <Head>
        <title>DSRKafuU</title>
        <meta name='description' content='Internet for people, not profit' />
      </Head>
      <SakanaWidget />
      <Card
        bg={cardBg}
        position='fixed'
        left='50%'
        top='50%'
        transform='translate(-50%, -50%)'
        py={{ base: '7', md: '6' }}
        w={{ base: '260px', md: '440px' }}
      >
        <Flex
          justify='center'
          align='center'
          direction={{ base: 'column', md: 'row' }}
        >
          <Image
            className={styles.image}
            width={128}
            height={128}
            src={avatarImage}
            alt='Avatar'
            priority
          />
          <Flex
            direction='column'
            justify='center'
            align='center'
            ml={{ base: '0', md: '4' }}
            mt={{ base: '4', md: '0' }}
          >
            <Heading size='lg'>DSRKafuU</Heading>
            <Text mt='1'>Internet for people, not profit</Text>
            <ButtonGroup spacing='0.5' mt='1'>
              <IconButton
                as='a'
                size='sm'
                variant='ghost'
                icon={<FaBlog />}
                aria-label='Blog'
                onClick={(e) => reportClick('goto_blog', e)}
                href='https://blog.dsrkafuu.net/'
                target='_blank'
              />
              <IconButton
                as='a'
                size='sm'
                variant='ghost'
                icon={<FaGithub />}
                aria-label='GitHub'
                onClick={(e) => reportClick('goto_github', e)}
                href='https://github.com/dsrkafuu'
                target='_blank'
              />
              <IconButton
                as='a'
                size='sm'
                variant='ghost'
                icon={<FaTwitter />}
                aria-label='Twitter'
                onClick={(e) => reportClick('goto_twitter', e)}
                href='https://twitter.com/dsrkafuu'
                target='_blank'
              />
              <IconButton
                as='a'
                size='sm'
                variant='ghost'
                icon={<FaCompactDisc />}
                aria-label='Bangumi'
                onClick={(e) => reportClick('goto_bgm', e)}
                href='https://bgm.tv/user/dsrkafuu'
                target='_blank'
              />
              <IconButton
                as='a'
                size='sm'
                variant='ghost'
                icon={<FaSteam />}
                aria-label='Steam'
                onClick={(e) => reportClick('goto_steam', e)}
                href='https://steamcommunity.com/id/dsrkafuu/'
                target='_blank'
              />
            </ButtonGroup>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}

export default Home;
