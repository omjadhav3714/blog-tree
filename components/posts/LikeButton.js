import { firestore, auth, increment } from '../../services/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';

export default function LikeButton({ postRef }) {
    const likeRef = postRef.collection('likes').doc(auth.currentUser.uid);
    const [likeDoc] = useDocument(likeRef);

    const addHeart = async () => {
        const uid = auth.currentUser.uid;
        const batch = firestore.batch();

        batch.update(postRef, { likes: increment(1) });
        batch.set(likeRef, { uid });

        await batch.commit();
    };

    const removeHeart = async () => {
        const batch = firestore.batch();

        batch.update(postRef, { likes: increment(-1) });
        batch.delete(likeRef);

        await batch.commit();
    };

    return likeDoc?.exists ? (
        <button onClick={removeHeart}>💔 UnLike</button>
    ) : (
        <button onClick={addHeart}>❤️ Like</button>
    );
}