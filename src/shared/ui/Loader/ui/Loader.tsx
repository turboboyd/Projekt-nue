import React from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => (
    <div className={classNames(styles.Loader, {}, [className])}>
        <div className={styles.lds_roller}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Loader;
