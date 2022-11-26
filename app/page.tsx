'use client';

import styles from './page.module.scss';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { event } from 'nextjs-google-analytics';
import { Button, Card } from '@dsrca/react';
import {
  FaBlog,
  FaCompactDisc,
  FaGithub,
  FaSteam,
  FaTwitter,
} from 'react-icons/fa';
import avatarImage from '../assets/dsrkafuu_1280p.jpg';

function Page() {
  const reportClick = useCallback((eventName: string, e: React.MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      const href = target.getAttribute('href');
      event(eventName, { href });
    }
  }, []);

  return (
    <div className={styles.page}>
      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.avatar}>
            <Image
              className={styles.image}
              width={128}
              height={128}
              src={avatarImage}
              alt='Avatar'
              priority
            />
          </div>
          <div className={styles.metadata}>
            <h1 className={styles.name}>DSRKafuU</h1>
            <span className={styles.bio}>Internet for people, not profit</span>
            <div className={styles.links}>
              <Button
                onClick={(e) => reportClick('goto_blog', e)}
                icon={<FaBlog />}
                href='https://blog.dsrkafuu.net/'
                target='_blank'
              />
              <Button
                onClick={(e) => reportClick('goto_github', e)}
                icon={<FaGithub />}
                href='https://github.com/dsrkafuu'
                target='_blank'
              />
              <Button
                onClick={(e) => reportClick('goto_twitter', e)}
                icon={<FaTwitter />}
                href='https://twitter.com/dsrkafuu'
                target='_blank'
              />
              <Button
                onClick={(e) => reportClick('goto_bgm', e)}
                icon={<FaCompactDisc />}
                href='https://bgm.tv/user/amzrk2'
                target='_blank'
              />
              <Button
                onClick={(e) => reportClick('goto_steam', e)}
                icon={<FaSteam />}
                href='https://steamcommunity.com/id/dsrkafuu/'
                target='_blank'
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Page;
