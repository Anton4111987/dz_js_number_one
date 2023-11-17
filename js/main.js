let button=document.getElementById('button');


button.addEventListener('click', function()
{
  
 let a=Number(document.getElementById('valueA').value);  // с помощью функции getElementById получаем значение текстбокс с Id=valueA, 
// берем значение value далее приводим к числу
let b=Number(document.getElementById('valueB').value);  // с помощью функции getElementById получаем значение текстбокс с Id=valueВ, 
// берем значение value далее приводим к числу
let action=document.getElementById('action');  //  с помощью функции getElementById получаем селектор с Id=action

console.log(a + action.value + b +'='+ work(a,b,action)); // выводим на консоль 
document.getElementById('result').value=work(a,b,action); // присваиваем текстбоксу результат вычислений
})

function work (a,b,action)
{
  switch(action.value)
  {
    case('+'):
      return a+b;
    case('-'):
      return a-b;
    case('*'):
      return a*b;
    case ('/'):
      return a / b;
  }

  
}

