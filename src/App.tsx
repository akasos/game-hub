import {Button, Grid, GridItem, Show} from "@chakra-ui/react";


function App() {
  return (
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}>
        <GridItem area="nav" bg="tomato">nav</GridItem>
        <Show above="lg">
        <GridItem area="aside" bg="coral">aside</GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">main</GridItem>
      </Grid>
  )
}

export default App
