import { Block } from 'notiflix/build/notiflix-block-aio';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getStateLoading } from 'redux/contacts/contactsSelector';
import { getStateIsLoading } from 'redux/user/userSelector';
import s from './SecondBox.module.css';

const SecondBox = ({ children, title }) => {
  const isLoadingA = useSelector(getStateLoading);
  const isLoadingB = useSelector(getStateIsLoading);

  useEffect(() => {
    isLoadingA || isLoadingB ? Block.circle('.box') : Block.remove('.box');
  }, [isLoadingA, isLoadingB]);

  return <div className={`${s.box} box`}>{children}</div>;
};

export default SecondBox;
