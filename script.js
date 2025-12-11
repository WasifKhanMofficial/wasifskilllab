function addstudent()
{
    let input=document.querySelector('#input');
    let name=input.value.trim();
    let li=document.createElement('li');
    let span=document.createElement('span');
    span.innerText=name;
    li.appendChild(span);
    document.querySelector('#list').appendChild(li);
    input.value='';
}