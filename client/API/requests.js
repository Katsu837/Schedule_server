import axios from "axios";

export async function startAppQuery ()
{
    await axios.get('http://localhost:5050/')
        .then((response) => {return response.data})
        .catch((error) => {console.error(error)})
}

export async function registrationQuery(firstName, secondName, email, password)
{
    await axios.post('http://localhost:5050/', {
        method: 'POST',
        headers: {
            'Logic': '',
        },
        body: JSON.stringify(data)
        }).catch()
}
