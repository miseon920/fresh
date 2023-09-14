'use client'
import React,{useState} from 'react'
import Image from 'next/image'
// 데이터 연습
let product = ['토마도', '파스타', '코코넛']; //array 자료형
// console.log(product); // 터미널에 뜬다..오잇!
// product.map((item, index) => {
//     console.log(index, item);
// })

// let test = product.map((food) => {
//     return "푸드"; //return에 적은것을 array로 담아준다.
// })

// console.log(test);

export default function List() { //보통 폴더명으로 작명함
    // const [num, setNum] = useState(0); // 클라이언트 컴포넌트에서만 사용가능, state가 변경이 되면 state를 쓰는 html부분도 자동으로 변경됨(자동 재 랜더링)
    // num = 변수, setNum은 변경함수

    // 한개만 쓰면 동시에 3개가 바뀌므로 array로 만든다.

    const [num, setNum] = useState<number[]>([0,0,0]); 
  return (
    <div>
        <h4 className='title'>상품목록</h4>
        {
            product.map((item: string, index: number)=> {
                return (
                    <div className="food" key={index}>
                        {/* <Image
                        src={`/img/food${index}.png`}
                        alt={item}
                        width={400}
                        height={400}
                        /> */}
                        <img src={`/img/food${index}.png`} alt="설명"/>  
                        <h4>{item} ${index + 1}0</h4>
                        {/* <button onClick={()=>{
                            if (num < 1) return;
                            setNum(num - 1);
                            }}> - </button>
                        <span> {num} </span>
                        <button onClick={()=>{setNum(num + 1)}}> + </button>  setNum은 변경함수라서 () 를 붙여줘야함, () 안에있는것으로 num을(기존 state) 바꿔준다. */}
                        {/* onClick 사용을 위해서 'use client' 작성, 클라이언트쪽이므로 터미널이 아닌 개발자 도구 콘솔창에서 확인 = 자바스크립트 기능넣으려면 client component  */}
                        <button onClick={()=>{
                            let copy = [...num];
                            if (copy[index] < 1) return; // 0보다 작으면 안됨
                            copy[index]--
                            setNum(copy)
                        }}> + </button>
                        <span> {num[index]} </span>
                        <button onClick={()=>{
                            let copy = [...num]; // 복사해서 계산해야한다. 
                            // 그냥 copy = num을 쓰면 num의 영향을 받아서 바뀐값으로 바뀌지 않게 된다(바뀌지않으면 state는 변경되지 않으므로). 따라서 [...num]으로 복사하여 num이 아닌 copy자체의 값을 인식하게 해야한다.
                            copy[index]++
                            setNum(copy)
                        }}> + </button>
                    </div>
                )
            })
        }
    </div>
  )
}


/*
* for 문법의 경우 html 바깥에서 for 써서 결과를 array에 담은 후에 그 결과를 html에 집어넣는 식으로는 가능
* 퍼블릭 폴더안에 이미지 저장 - 퍼블릭 경로의 경우 배포시 root로 변경된다.

* 최적화된 이미지 사용시 
 - 상단에 이미지를 import하여 사용해야한다..(import 안 했는대 제대로 뜨는건 왜일까..?ㅎㅎ)
 - import 하기를 원치 않다면 src 자리에 require로 감싸서 불러줘야 한다.
 <https://velog.io/@sms8377/Javascript-require-%EA%B0%84%EB%8B%A8-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC-%EB%B0%8F-module.export-%EC%99%80-export%EC%9D%98-%EC%B0%A8%EC%9D%B4>
 - width, height 셋팅
<Image
    src={`/img/food${index}.png`}
    alt={item}
    width={400}
    height={400}
/>
- <https://beta.nextjs.org/docs/optimizing/images#remote-images> 다른곳에 이미지가 있는경우 세팅 필요


😚state가 array일 때 변경함수로 바꾸어도 아무일도 일어나지 않는다.

예) let arr = [1,2,3];
    let arr2 = arr;
    console.log(arr2 == arr); // 변수 둘다 같은 값을 가르키고 있으므로 true가 나온다
    let arr2 = [...arr] // 복사하여 독립적인 자신만의 array 값을 가지게 되는 것

# 래퍼런스 타입 = 참조형(값 그 자체가 아니라 주소를 가지게 되는것= 예 : 배열, 열거, 클래스, 인터페이스 등 - 객체나 배열등) :  javascript reference data type
- 레퍼런스 타입은 레퍼런스 값을 통해 데이터를 다룬다는 점이다.
- 프리미티브 타입의 변수에 값을 대입 하면 실제로 그 값이 변수에 저장되지만, 레퍼런스 타입 변수에 객체를 대입하면 객체가 변수에 저장 되는 것이 아니라 메모리상에 객체가 있는 위치를 가리키는 정보만 변수에 저장된다. 그래서 레퍼런스 변수를 다른 레퍼런스 변수에 대입하면 객체가 복사되는 것이 아니라 참조값만 복사된다.
<https://invincure.tistory.com/entry/Chap7-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%ED%83%80%EC%9E%85>
<https://jaddong.tistory.com/entry/%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%ED%83%80%EC%9E%85%EC%B0%B8%EC%A1%B0%ED%83%80%EC%9E%85-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0>


# 스프레드 문법 : spread operator
 - 배열이나 객체 왼쪽에 붙이는 점3개
 - 첫번째 용도 괄호제거용 연산자
    예)
     ...[1,2,3] 을쓰면 1,2,3만 남음

 - 두번째 용도는 배열이나 객체 복사
    예) 
    let data1 = [1,2,3];
    let data2 = [...data1];
    console.log(data1 == data2) //false : 독립적인 array 복사본을 생성하므로 새로운 array로 인식
    data2와 같은 독립적인 사본을 shallow copy 또는 deep copy 라고 한다.

# 리액트에서 array/object로 되어있는 state를 수정하고 싶으면 독립적인 카피본을 만들어서 수정해야 한다.
[...기존state] 
{...기존state} 

*/