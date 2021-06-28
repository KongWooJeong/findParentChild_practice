const parent2 = document.querySelector('.parent2');
 

console.log(parent2);
console.dir(parent2);

/**
 * 해당 태그의 자식요소를 NodeList에 담아 저장이 되어있다.
 * childNodes는 해당 주석처리된 부분과 줄바꿈 부분까지 각 각 포함하여 NodeList에 저장이 되어있다.
 * 배열의 length와 똑같이 length 프로퍼티가 있어 해당 자식요소의 개수의 정보를 담고 있다.
 * 배열처럼 자식요소를 [] 통해 각 각 자식요소에 접근 할 수 있다.
 */

let child = parent2.childNodes;

// 배열 처럼 [] 사용하여 각 각 자식요소의 접근 할 수 있다.
for(let i = 0; i < child.length; i++) {
    console.log(child[i]);
}

/**
 * childNodes와 는 다르게 주석, 줄 바꿈을 해당 자식요소에 포함하지 않고
 * 오직 html 태그 요소만 자식요소로 들어간다.
 * 배열처럼 자식요소를 [] 통해 각 각 자식요소에 접근 할 수 있다.
 */

let children = parent2.children;

// 배열 처럼 [] 사용하여 각 각 자식요소의 접근 할 수 있다.
for(let i = 0; i < children.length; i++) {
    console.log(children[i]);
}

/**
 * firstChild : 주석이나 줄바꿈을 포함한 자식요소중 첫번째 자식요소의 값을 담고 있다.
 * fistElementChild : html 태그 요소만 포함한 자식요소중 첫번째 자식요소의 값을 가지고 있다.
 */

 console.log(parent2.firstChild); // <!--빈 주석--> 반환
 console.log(parent2.firstElementChild); // li 태그 반환

/**
 * lastChild : 주석이나 줄바꿈을 포함한 자식요소중 마지막 자식요소의 값을 담고 있다.
 * lastElementChild : html 태그 요소만 포함한 자식요소중 마지막 자식요소의 값을 가지고 있다.
 */

 console.log(parent2.lastChild); // 줄바꿈 반환
 console.log(parent2.lastElementChild); // li 태그 반환


const child1 = document.querySelector('.locate');

console.dir(child1);

/**
 * parentElement, parentNode : 부모요소의 정보를 담고 있다.
 */

 console.log(child1.parentElement); // ul 태그 반환
 console.log(child1.parentNode); // ul 태그 반환

/**
 * parentElement, parentNode의 차이점은 모든것이 같지만
 * 단 하나, 다르다 바로 parentElement는 Element node를 반환한다는 점이
 * 부모요소가 Element node가 아니라면 null 반환 한다.
 */

console.log(document.documentElement.parentNode); // document 문서 자체를 반환
console.log(document.documentElement.parentElement); // null


