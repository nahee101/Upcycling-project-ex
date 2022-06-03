/* 아이디에 해당하는 거래글 볼 수 있는 페이지 */
/* json 파일 import */
// json 객체를 product 변수에 넣어 import 

const DealPage = () => {
    
    return (
        <div>
            { products.products.map(
                (product, id) => (
                    <div key={id}>
                    <p>{product.deal_category}</p>
                    <h1>{product.deal_title}</h1>
                    <p>{product.deal_price}</p>
                    <img src="" alt="" />
                    <p>{product.deal_content}</p>
                </div>    
                )
            )
            }
        </div>
            
    );
};

export default DealPage;