import {age, name}  from '@/app/cart/data'; // data.js 에서 export할때 {}안에 썻으므로 import시에도 {} 써줘야함

export default function Cart() {
    let product = ['토마도', '파스타']; 
    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem product={product} test={20}/>
        {/* 
            - props는 부모가 자식에게만 data를 줄수있음, 위나 옆으로 못줌; 
            - product={product} 처럼 작명과 데이터명을 같게 많이 씀
            - 데이터명이 문자일경우  banner='롯데' 처럼 데이터값을 {}안이 아니라 '' 안에 담아두 됨
        
        */}
        <Banner banner='롯데'/>
        <Btn color="red" />
        <Btn color="blue" />
      </div>
    )
  }

//컴포넌트 만들기 - 재사용이 많은것만 만들기, 코드를 간결하고 재사용에 용이, 페이지 규모가 엄청 클때
function CartItem(props: {product: string[], test: number}) { // 코드스플릿을 위해 여기에 다쓰지 않고 파일로 분리시킴
    // props로 넘겨줄 값을 {} 안에 작명: type을 적어준다.
    //cart에 product변수를 CartItem에서 쓸 수 없으므로 props로 내려준다.
    return(
        <>
            {
                props.product.map((product, index) => {
                    return(
                        <div className="cartItem">
                            <p>상품명 {product}</p>
                            <p>$ {(props.test)*(index + 1)}</p>
                            <p>1개</p>
                        </div>
                    )
                })
            }
        </>
    )
}

function Banner(props: {banner: string}) {
    return <div>{props.banner} 행사중!</div>
}

function Btn(props: {color: string}){
    return <button style={{ background : props.color }}>버튼임</button>
}




/*
1. 서버 컴포넌트
- 그냥 마구 만든 컴포넌트
- html에 자바스크립트 기능넣기 불가능 (onClick 등)
- useState, useEffect 등 리액트 훅 사용불가
- 로딩 속도가 빠름
- 검색엔진 노출에 유리

2. 클라이언트 컴포넌트
- 파일 상단에 'use client' 하고 준것은 클라이언트 컴포넌트
- html에 자바스크립트 기능넣기 가능 (onClick 등)
- useState, useEffect 등 리액트 훅 사용
- 자바스크립트가 많이 필요한 만큼 로딩 속도가 느림
- hydration(하이드레이션) 필요 : html을 유저에게 보낸후에 자바스크립트로 html을 다시 읽고 분석하는일

3. 추천♦️
- 큰페이지는 서버 컴포넌트로 제작
- js 기능이 필요한 곳만 클라이언트 컴포넌트로 제작
- 성능이 중요치 않다면 클라이언트 컴포넌트로 쓰면 된다.

4. nextjs 장점
- 같은데이터요청이 여러개 오면 1개로 압축해 줌(decuplication : 디 듀플리케이션)

*/