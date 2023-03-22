import styles from './index.module.scss';
import { useCallback, useState } from 'react';
import { Button, Card, Input, message } from 'antd';
import {
  IArrowsRepeat,
  IChevronsLeft,
  IChevronsRight,
  ICopy,
  ITrash,
} from '@/icons';
import { decodeKata, encodeKata } from '@/utils/katacode';

function KataCode() {
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');

  const handleClear = useCallback(() => {
    setSource('');
    setTarget('');
  }, []);

  const handleConvert = useCallback(async () => {
    try {
      if (!source) {
        return;
      }
      let result = await encodeKata(source);
      result = `KataCode::<https://dsrkafuu.net/app/katacode::${result}`;
      setTarget(result);
    } catch (e) {
      message.error('Error encoding kata code, please check your source input');
    }
  }, [source]);

  const handleRevert = useCallback(async () => {
    try {
      if (!target) {
        return;
      }
      const input = target.trim().split('::')[2];
      const result = await decodeKata(input);
      setSource(result);
    } catch {
      message.error('Error decoding kata code, please check your code input');
    }
  }, [target]);

  return (
    <Card className={styles.card} bordered={false}>
      <div className={styles.ctrls}>
        <Button icon={<ICopy />} />
        <span className={styles.title}>Source</span>
        <IArrowsRepeat />
        <span className={styles.title}>Result</span>
        <Button icon={<ICopy />} />
      </div>
      <div className={styles.inputs}>
        <div className={styles.area}>
          <Input.TextArea
            className={styles.input}
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className={styles.center}>
          <Button
            className={styles.convert}
            icon={<IChevronsRight />}
            onClick={handleConvert}
          />
          <Button
            className={styles.convert}
            icon={<IChevronsLeft />}
            onClick={handleRevert}
          />
          <Button
            className={styles.convert}
            icon={<ITrash />}
            onClick={handleClear}
          />
        </div>
        <div className={styles.area}>
          <Input.TextArea
            className={styles.input}
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
      </div>
    </Card>
  );
}

export default KataCode;
