const correct_answer = ['B','A','B','B'];
const submit = document.querySelector('.btn');
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const percent = document.querySelector('span');

form.addEventListener('submit',(e)=> {
    e.preventDefault();

    let score = 0;
    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    answers.forEach((answer, index) => {
        if(answer == correct_answer[index])
        score +=25;

    })
    scrollTo(0,0); // x, y
    result.classList.remove('d-none');

    // scroll up when submit
    //documnet 앞에 window 가 생략되어 있는 것 
    //window => global object 

    let output = 0
    const timer = setInterval(()=> {
         //override percent 
    percent.textContent=`${output}%`;
        if(output == score) {
            clearInterval(timer);
        }else {
            output++;
        }
    },10);
})
