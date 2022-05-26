import { Dispatch, FC, SetStateAction } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

import styles from './ModalAddUser.module.scss';

import { commentsActions } from 'store/reducers';
import { CommentType, Nullable } from 'types';
import { useActions } from 'utils/redux-utils';

type ModalProps = {
  setModalActive: Dispatch<SetStateAction<boolean>>;
};

type FormData = {
  name: string;
  email: string;
  body: string;
};

const minLength = 2;

const schema = yup
  .object({
    name: yup.string().min(minLength, 'Слишком короткое имя').required(),
    email: yup.string().email().required(),
    body: yup.string().required(),
  })
  .required();

export const ModalAddUser: FC<ModalProps> = ({ setModalActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { addComment } = useActions(commentsActions);
  const { postId } = useParams();
  const onSubmit = (data: FormData): Nullable<void> => {
    const comment: CommentType = {
      postId: +postId!,
      body: data.body,
      email: data.email,
      name: data.name,
      id: Math.random(), // bad practice
    };
    setModalActive(false);
    addComment(comment);
  };

  return (
    <div className={styles.modal_authshape}>
      <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className={styles.modal_label}>
          Name
          <input {...register('name')} className={styles.modal_input} />
          <p className={styles.error}>{errors.name?.message}</p>
        </label>
        <label htmlFor="Email" className={styles.modal_label}>
          Email
          <input {...register('email')} className={styles.modal_input} />
          <p className={styles.error}>{errors.email?.message}</p>
        </label>
        <label htmlFor="body" className={styles.modal_label}>
          Text
          <input {...register('body')} className={styles.modal_input} />
          <p className={styles.error}>{errors.body?.message}</p>
        </label>
        <div className={styles.modal_btn_wrap}>
          <button
            className={styles.modal_cancel}
            onClick={() => setModalActive(false)}
            type="button"
          >
            Cancel
          </button>
          <input className={styles.modal_submit} type="submit" />
        </div>
      </form>
    </div>
  );
};
