/* 댓글 수정 */

import { useState } from "react";

const CommentEditingForm = () => {
    const [comment, setComment] = useState('');
    
    return(
        <div>
            <form action="">
                {/* 댓글 작성 공간 */}
                <textarea name="" id="" cols="30" rows="10"></textarea>
                {/* 파일 업로드 */}
                {/* 작성하기 */}
                <input type="submit" value="작성하기" />
            </form>
        </div>
    )
};

export default CommentEditingForm;