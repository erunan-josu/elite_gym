import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
/* html {
    @media (max-width: 1700px) {
        font-size: 75%;
    }

} */
body {
    font-family: 'Inter', sans-serif;;
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
    font-size: 1.1rem;
}
`

export default GlobalStyle
