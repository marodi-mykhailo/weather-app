import React from 'react';
import styles from './NoDataComponent.module.css'

type NoDataComponentPropsType = {
    text: string
}

const NoDataComponent = (props: NoDataComponentPropsType) => {
    return (
        <div className={styles.div}>
            <h3 className='text-uppercase text-center'>{props.text}</h3>
        </div>
    );
};

export default NoDataComponent;
