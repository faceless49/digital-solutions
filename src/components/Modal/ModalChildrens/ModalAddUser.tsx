import { Dispatch, FC, SetStateAction } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './ModalAddUser.module.scss';

import { commentsActions } from 'store/reducers';
import { CommentType, Nullable } from 'types';
import { useActions } from 'utils/redux-utils';

type ModalProps = {
  setModalActive: Dispatch<SetStateAction<boolean>>;
};

const minLength = 2;

const schema = yup
  .object({
    name: yup.string().min(minLength, 'Слишком короткое имя').required(),
    email: yup.string().email().required(),
    text: yup.string().required(),
  })
  .required();

export const ModalAddUser: FC<ModalProps> = ({ setModalActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentType>({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schema),
  });

  const { addComment } = useActions(commentsActions);

  const onSubmit = (data: CommentType): Nullable<void> => {
    addComment(data.name, data.email, data.body);
    setModalActive(false);
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
          <textarea {...register('body')} className={styles.modal_input} />
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
