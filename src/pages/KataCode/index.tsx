import styles from './index.module.scss';
import { useCallback, useState } from 'react';
import { Button, Card, Input } from 'antd';
import { IArrowsRepeat, ICopy, ITrash } from '@/icons';
import { decodeKata, encodeKata } from '@/utils/katacode';

function KataCode() {
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');

  const handleClear = useCallback(() => {
    setSource('');
    setTarget('');
  }, []);

  const handleSourceChange = useCallback(
    async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setSource(value);
      const result = await encodeKata(value);
      setTarget(result);
    },
    []
  );

  const handleTargetChange = useCallback(
    async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setTarget(value);
      const result = await decodeKata(value);
      setSource(result);
    },
    []
  );

  return (
    <Card bordered={false}>
      <div className={styles.ctrls}>
        <Button className={styles.ctrlbtn} icon={<ICopy />}>
          Copy
        </Button>
        <Button icon={<ITrash />} onClick={handleClear}>
          Clear
        </Button>
        <span className={styles.title}>Source</span>
        <IArrowsRepeat />
        <span className={styles.title}>Result</span>
        <Button icon={<ICopy />}>Copy</Button>
        <Button
          className={styles.ctrlbtn}
          icon={<ITrash />}
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
      <div className={styles.inputs}>
        <div className={styles.area}>
          <Input.TextArea
            className={styles.input}
            value={source}
            onChange={handleSourceChange}
          />
        </div>
        <div className={styles.area}>
          <Input.TextArea
            className={styles.input}
            value={target}
            onChange={handleTargetChange}
          />
        </div>
      </div>
    </Card>
  );
}

export default KataCode;
