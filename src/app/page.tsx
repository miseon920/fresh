// import Image from 'next/image'
import Link from "next/link";

// 메인페이지
export default function Home() {
    let name: string = "sunny";
    // let link = "https://github.com/miseon920";
    return (
        <div className="main">
            {/* <h4 style={{color:'red', fontSize:'30px'}}>안녕</h4> 스타일 예시, 자스오브젝트형 방법이라 '-' 기호를 쓸수없음, 두번째 단어를 대문자로 바꿈 */}
            {/* <h1 className="textColor">안녕</h1> class-> className*/}
            <h4 className="title">써니후레시</h4>
            <p className="titleSub">by dev {name}</p> {/* jsx의 데이터바인딩 문법 : html안에 중괄호 안에 변수 넣기 */}
            {/* <a href={link} target="_blank">링크</a> */}
        </div>
    )
}
