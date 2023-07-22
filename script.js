let input = document.getElementById("task_add")
let btn = document.querySelector(".add")
let tasks = document.querySelector(".task_list")

// console.log(input)



input.addEventListener("keyup", () => {
    // console.log(input.value.length)
    if (input.value.length != 0) {
        btn.classList.add("active")
    }
    else if (input.value.length == 0) {
        btn.classList.remove("active")
    }
});

// console.log(btn)

// console.log(tasks)

let num = 1;

btn.addEventListener("click", () => {
    if (input.value.length != 0) {
        let newItem = document.createElement("li")
        let id = "item" + num;
        let check_id = "check" + num;
        newItem.classList.add('item')
        newItem.setAttribute('id', id)
        newItem.innerHTML = `
        <input type="checkbox" name="asdfas" class="checkbox" id=${check_id}> 
        <p id=${check_id+"text"}>${input.value}</p>`
        tasks.appendChild(newItem)
        let newbtn = document.createElement("button")
        // let btnid = 'delete' + num
        newbtn.classList.add('delete')
        newbtn.setAttribute('id', id)
        newbtn.innerHTML =`
        -</button>
        `
        tasks.appendChild(newbtn)
        input.value = ""
        btn.classList.remove("active")
        num++;
        del()
        checked_checker()
    }
})

input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter' && input.value.length != 0) {
        let newItem = document.createElement("li")
        let id = 'item' + num;
        let check_id = "check" + num;
        newItem.classList.add('item')
        newItem.setAttribute('id', id)
        newItem.innerHTML = `
        <input type="checkbox" name="asdfas" class="checkbox" id=${check_id}> 
        <p id=${check_id+'text'}>${input.value}</p>`
        tasks.appendChild(newItem)
        let newbtn = document.createElement("button")
        // let btnid = 'delete' + num
        newbtn.classList.add('delete')
        newbtn.setAttribute('id', id)
        newbtn.innerHTML =`
        -</button>
        `
        tasks.appendChild(newbtn)
        input.value = ""
        btn.classList.remove("active")
        num++;
        del()
        checked_checker()
    }
})

let delbtn = document.getElementsByClassName('delete')

// console.log(delbtn)

function del(){
    for (const i of delbtn) {
        i.addEventListener('click', (event) => {
            event.currentTarget.style.display = 'none';
            let tag = i.id;
            let tsk = document.getElementById(tag)
            // console.log(tag)
            tsk.style.display = 'none'

        })
        // console.log(i)
    }
}

del()

function checked_checker(){
    var checkBox = document.getElementsByClassName("checkbox")
    // var text = document.getElementById
    console.log(checkBox)
    for ( const j of checkBox){
        j.addEventListener('click',()=>{

            if (j.checked == true)
            {
                var text_id = j.id + 'text'
                var text = document.getElementById(text_id)
                console.log(text)
                text.style.textDecoration = 'line-through'
            }
            else{
                var text_id = j.id + 'text'
                var text = document.getElementById(text_id)
                text.style.textDecoration = 'none'
            }
        })

    }
}

checked_checker()