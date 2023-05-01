async function registerUser() {
    // event.preventDefault()
    // const username = document.getElementById('username').value
    // const password = document.getElementById('password').value
    // const email = document.getElementById('email').value
    const username = "w3rew01f"
    const password = "bhavgoyal05"
    const email = "werewolfpy@gmail.com"

    const result = await fetch('http://localhost:3000/api/user/reg_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            email
        })
    }).then((res) => {
        res.json()
        if (result.status === 201) {
            alert("Check Your mail To verify")
        
        } else {
            alert(result.error)
        }
    })

    
}
registerUser()