import styles from '../components/minimizingWindow.module.css'
import Minimize from '@mui/icons-material/Minimize';
import OpenInFull from '@mui/icons-material/OpenInFull';
import Close from '@mui/icons-material/Close';
import Link from 'next/link';

import React, { useEffect, useRef, useState } from "react";
interface IProps {
  open?: boolean;
  title: string | React.ReactNode;
  children: React.ReactNode;
}

const MinimizingWindow: React.FC<IProps> = ({
  open,
  title,
  children
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const ref = useRef<HTMLDivElement>(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);
  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);
  return (
    <>
      <div className={`${styles.collapsibleCard} ${isOpen? styles.opened : styles.closed}`}>
        <div>
          <div className={`${styles.collapsibleHeader} ${isOpen? styles.opened : styles.closed}`}>
            <div className={styles.titleText}>{title}</div>
            <table>
              <tr>
                <td>
                  <button
                    type="button"
                    className={styles.collapsibleIconButton}
                    onClick={handleFilterOpening}
                  >
                    {isOpen? <Minimize />: <OpenInFull />}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.collapsibleIconButton}
                    onClick={handleFilterOpening}
                  >
                    <Close />
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.collapsibleContent} style={{ height }}>
          <div ref={ref}>
            <div className={styles.collapsibleContentPadding}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinimizingWindow;
