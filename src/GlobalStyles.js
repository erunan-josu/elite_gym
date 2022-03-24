import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1700px) {
        font-size: 75%;
    }

}
body {
    color: #333;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

h2{
    font-size: 4rem;
}
h4 {
    font-size: 2rem;
}

li{
    font-weight: bold;
}
a {
    color: inherit;
    text-decoration: none;
    font-size: 1.1rem;
}
button {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
}
`

export default GlobalStyle
