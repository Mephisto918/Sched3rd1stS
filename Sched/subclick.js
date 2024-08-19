// // window.onload = () => {
//     const subjectBtt = document.querySelectorAll('.subject');
//     subjectBtt.forEach(button => {
//         button.addEventListener('click', ()=>{
//             const subCon = document.createElement('div');
//             // function detail(){
//                 const code = document.createElement('h3');
//                 const title = document.createElement('h3');
//                 const prof = document.createElement('h3');

//                 // code.textContent = button.getAttribute('data-code');
//                 title.textContent = button.getAttribute('data-subtitle');
//                 prof.textContent = button.getAttribute('data-prof');

//                 subCon.append(code, title, prof);
//                 subCon.classList.add('details');
//                 subCon.style.backgroundColor = button.getAttribute('data-bg');


//                 button.append(subCon);
//             // console.log(button.getAttribute('data-code'));
//         });
//     })
// // }