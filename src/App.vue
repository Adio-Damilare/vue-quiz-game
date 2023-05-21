<script setup lang="ts">
import {ref,computed} from 'vue';
const questions=ref([
  {
    question:'In which part of your body would you find the cruciate ligament?',
    answer:'Knee',
    option:[
      'Knee',
      'eye',
      'leg',
      'stomach'
    ],
    selected:null,
  },
  {
    question:'What is the name of the main antagonist in the Shakespeare play Othello?',
    answer:'Iago',
    option:[
      'Mago',
      'Jungle',
      'Iago',
      'Groffers'
    ],
    selected:null,
  },
  {
    question:'In what US State is the city Nashville?',
    answer:'Tennessee',
    option:[
      'Tennessee',
      'Scott',
      'Treserr',
      'None'
    ],
    selected:null,
  },
  {
    question:'What element is denoted by the chemical symbol Sn in the periodic table?',
    answer:'Tin',
    option:[
      'Tin',
      'Boron',
      'Treserr',
      'None'
    ],
    selected:null,
  }
]);
const quizCompleted=ref(false);
const currentQuestion=ref(0);
const score=computed(()=>{
  let value=0;
  questions.value.forEach((q)=>{
    if(q.selected==q.answer){
      value++;
    }
  })
  return value;
})

const getCurrentQuestion=computed(()=>{
  let q:any=questions.value[currentQuestion.value];
  q.index=currentQuestion.value;
  return q;
})

const SetAnswer=(e:any)=>{
  questions.value[currentQuestion.value].selected=e.target.value;
  e.target.value=null;
}

const nextQuestion=()=>{
  if(currentQuestion.value < questions.value.length-1){
    currentQuestion.value++;
  }else{
    quizCompleted.value=true;
  }
}

</script>

<template>
  <main class="app">
    <h1>The Quiz application</h1>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question"> {{ getCurrentQuestion.question }}</span>
        <span class="score">Score :{{ score }}/{{ questions.length }}</span>
      </div>
      <div class="options">
        <label 
          v-for="(option,index) in getCurrentQuestion.option "  
          :key="index" 
          :class="`option ${
            getCurrentQuestion.selected==option? option==getCurrentQuestion.answer? 'correct':'wrong':' '
          }   ${getCurrentQuestion.selected != null && index !=getCurrentQuestion.selected?'disabled':' '}`">
          <input 
            type="radio" 
            :name="getCurrentQuestion.index" 
            id=""
            :value="option" v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @click="SetAnswer">
            <span>{{ option }}</span>
        </label>
      </div>
      <button @click="nextQuestion" :disabled="getCurrentQuestion.selected==null">
        <span> {{ getCurrentQuestion.index==questions.length-1?'Finish':getCurrentQuestion.selected==null? 'Selected an option':'Next question'}}  </span>
      </button>
    </section>
    <section v-else>
      <h2>You have finished the quiz</h2>
      <p>Your score is {{ score }} out {{ questions.length }}</p>
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Montseratti';
  font-family: 'Montserrat', sans-serif;
}
body{
  background-color: #271c36;
  color:#FFF;
}

.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

h1{
  font-size: 2rem;
  margin-bottom: 2rem;
}
.quiz{
  background-color: #382a4b;
  padding: 1rem;
  min-width: 50%;
  border-radius: 0.5rem;
}
.quiz-info{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.quiz-info .question{
  color: #8f8f8f;
  font-size: 1.25rem;
}
.quiz-info .score{
  color: #FFF;
  font-size: 1.25rem;
}
.options{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.option{
  padding: 1rem;
  display: block;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  min-width: 100%;
}
.option:hover{
  border: 2px solid #271c36;
  background-color: #382a4b;
  transform: scale(1.0002);
  transition: ease-out 0.2s;
}
.option.correct{
  background-color: #2cce7d;
}
.option.wrong{
  background-color: #ff5a5f;
}
.option:last-of-type{
  margin-bottom: 0;
}
.option.disabled{
  opacity:  0.5;
}
.option input{
  display: none;
}

button{
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  text-transform: uppercase;
  font-size: 1.2rem;
}
button:disabled{
  opacity: 0.5;
}
h2{
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}
p{
  color: #8f8f8f;
  font-size: 1.2rem;
  text-align: center;
}
</style>
