// html의 script 태그 상단으로 이동
window.onload = () => {

    // panel-faq-container
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
    console.log(panelFaqContainer); // NodeList 객체

    // panel-faq-answer
    let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer')
    // console.log(panelFaqAnswer[i]);
    console.log(panelFaqAnswer);


    // btn-all-close
    const btnAllClose = document.getElementById('btn-all-close');
    console.log(btnAllClose)

    // 반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
    for (let i=0; i < panelFaqContainer.length; i++) {

        panelFaqContainer[i].addEventListener('click', function() {

            // 클릭시 처리할 일
            console.log('Click'+ i);


            // FAQ 제목 클릭시 --> 본문이 보이게끔 --> active 클래스 추가
            // this.classList.add('active');
          
            panelFaqAnswer[i].classList.add('active');
            

        });

    }

    btnAllClose.addEventListener('click', function(){

        // 버튼 클릭시 처리할 일
        for(let i=0; i<panelFaqContainer.length; i++) {
            panelFaqAnswer[i].classList.remove('active');

        }


    });

}