  // First option
  maxW = {
      [
          "auto", // base
          "auto", // 480px upwards
          "auto", // 768px upwards
          "1200px", // 992px upwards
      ]
  }

  // Second option
  maxW = {
      {
          base: "auto",
          sm: "auto",
          md: "auto",
          lg: "auto",
          xl: "1200px"
      }
  }
  import React from "react"
  import { Flex } from "@chakra-ui/core"
  import Header from "../sections/Header"
  import Footer from "../sections/Footer" // will add this in the part 2

  export default function LandingLayout(props) {
      return ( <
          Flex direction = "column"
          align = "center"
          maxW = {
              { xl: "1200px" }
          }
          m = "0 auto" {...props } >
          <
          Header / > { props.children } <
          Footer / >
          <
          /Flex>
      )
  }