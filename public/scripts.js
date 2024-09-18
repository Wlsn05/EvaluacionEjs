document.querySelector('#btnSend').addEventListener('click', () => {
    const idPhone = document.querySelector('#id-phone').value
    const namePhone = document.querySelector('#name-phone').value
    const valuePhone = document.querySelector('#value-phone').value
    const data = { id: idPhone, name: namePhone, value: valuePhone }

    fetch('http://localhost:3000/new-record', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        //.then(res => fetch("http://localhost:3000"))
        .catch(err => console.log(err))
})
document.getElementById('dpto').addEventListener('change', (event) => {
    const code = document.getElementById('dpto').value;
    document.getElementById('town').length = 0;
    dataTowns.filter(town => town.department == code).forEach(townAux => {
        document.getElementById('town').add(new Option( townAux.name, townAux.code));
    })
});