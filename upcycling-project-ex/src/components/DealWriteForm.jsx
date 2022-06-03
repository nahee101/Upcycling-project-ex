/* 글 작성 */

import { useState, useEffect } from "react";

const DealWriteForm = () => {
    /* useState */
    // 제목
    const [inputTitle, setInputTitle] = useState('');
    // 가격
    const [inputCategory, setInputCategory] = useState([]);
    // 가격
    const [inputPrice, setInputPrice] = useState('');
    // 글
    const [inputContent, setInputContent] = useState('');
    // 사진
    const [attachment, setAttachment] = useState();
    
    /* 이용 함수 */
    // form submit
    const onSubmit = (e) => {
        e.preventDefault();

        const deal = {inputTitle, inputPrice, inputContent};

        fetch('http://localhost:3000/dealform')
    };

    // 제목, 가격, 글 내용
    const onChange = (e) => {
        // console.log(e.target.name);
        const {target: {name, value}} = e;

        if(name === 'title') {
            setInputTitle(value);
        } else if(name === 'price') {
            setInputPrice(value);
        } else if(name === 'content') {
            setInputContent(value);
        }
    };

    // 이미지 파일
    const onFileChange = (e) => {
    };

    // 이미지 파일 삭제
    const onClearAttachment = () => setAttachment(null);

    return(
        <div>
            {/* 글 작성 폼 */}
            <form
            onSubmit={onSubmit}>

                {/* ⭐ 카테고리 */}
                <label>카테고리</label>
                <select>
                    <option value="">의류</option>
                    <option value="">잡화</option>
                    <option value="">뷰티/미용</option>
                    <option value="">반려동물</option>
                    <option value="">교육/체험 키트</option>
                    <option value="">기타 중고물품</option>
                </select> <br />

                {/* ⭐ 제목 */}
                <label>제목</label>
                <input 
                name="title"
                value={inputTitle}
                onChange={onChange}
                type="text" /> <br />

                {/* ⭐ 가격 작성 */}
                <label>가격</label>
                <input 
                name="price"
                value={inputPrice}
                onChange={onChange}
                type="number" /> <br />
                
                {/* ⭐ 글 작성 공간 */}
                <label>글 작성</label>
                <textarea
                name="content"
                value={inputContent}
                onChange={onChange}
                cols="30" rows="10" /> <br />
                
                {/* ⭐ 파일 업로드 */}
                <input
                onChange={onFileChange}
                type="file"
                accept="image/*" /> <br />
                {/* 업로드할 사진 미리보기 */}
                {attachment && (
                    <div>
                        <img 
                        src={attachment}
                        width="50px" height="50px" />

                        <button
                        onClick={onClearAttachment}>삭제하기</button>
                    </div>
                )}
                
                {/* ⭐ 작성하기 */}
                <input type="submit" value="작성하기" />
            </form>
        </div>
    )
};

export default DealWriteForm;