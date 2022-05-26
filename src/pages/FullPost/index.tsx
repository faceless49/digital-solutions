import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './FullPost.module.scss';

import { Modal, ModalAddUser, Comment } from 'components';
import { commentsActions } from 'store/reducers';
import { selectCommentsById, selectPostById } from 'store/selectors';
import { Nullable, ReturnComponentType } from 'types';
import { useActions } from 'utils/redux-utils';

export const FullPost = (): ReturnComponentType => {
  const [modalActive, setModalActive] = useState(false);

  const { postId } = useParams();

  const post = useSelector(selectPostById(postId!));

  const comments = useSelector(selectCommentsById(postId!));

  const { fetchComments } = useActions(commentsActions);

  const addCommentHandler = (): Nullable<void> => {
    setModalActive(true);
  };

  useEffect(() => {
    if (!comments.length) {
      fetchComments({ postId: +postId! });
    }
  }, []);

  return (
    <div className={styles.fullpost}>
      <h2 className={styles.title}>
        {post.id}.{post.title}
      </h2>
      <p className={styles.body}>{post.body}</p>

      <div>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            postId={comment.postId}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </div>
      <button type="button" onClick={addCommentHandler}>
        Add comment
      </button>
      <Modal active={modalActive}>
        <ModalAddUser setModalActive={setModalActive} />
      </Modal>
    </div>
  );
};
