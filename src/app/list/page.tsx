import React from 'react'
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
*/