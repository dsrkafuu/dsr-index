import 'sakana-widget/lib/index.css';
import styles from './index.module.scss';
import { useEffect } from 'react';
import _SakanaWidget from 'sakana-widget';

function SakanaWidget() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = window as any;
    if (global._SakanaWidget) {
      return;
    }
    const widget = new _SakanaWidget();
    widget.mount('#sakana-widget');
    global._SakanaWidget = widget;
    return () => {
      widget.unmount();
      delete global._SakanaWidget;
    };
  }, []);

  return (
    <div id='sakana-widget' className={styles.widget}>
      {' '}
    </div>
  );
}

export default SakanaWidget;
