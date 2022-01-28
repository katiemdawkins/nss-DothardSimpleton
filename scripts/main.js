// import the functions needed
import { businessList } from "./BusinessList.js"

const mainContainer = document.querySelector("#container")

const mainHTML = `

<article class="businessList">
${businessList()}
</article>
`

mainContainer.innerHTML = mainHTML