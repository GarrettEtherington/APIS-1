console.log(`connected`)

const bPress = () => {
    axios.get("https://swapi.dev/api/planets/?search=alderaan") //this is the url that I am making the axios request to find the data on alderaan
        .then((res) => {
            res.data.results[0].residents.forEach(residents => {
                axios.get(residents) //this is making a new axios request for each of the urls
                    .then((res) => {
                        const residentName = res.data.name //I am extracting the name from the response and saving it to the new variable residentName
                        const h2 = document.createElement("h2") // This is creating a new h2 element to display the name
                        h2.textContent = residentName // This is adding the text/name to the h2 element
                        document.body.appendChild(h2)// finaly this should append the h2 element to the body as a child
                    })

            })
        })
}

const resB = document.querySelector("#residentsB")
resB.addEventListener("click", bPress)