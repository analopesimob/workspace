import Link from "../src/components/Link";
import React from "react";

function GlobalStyles() {
  return (
	<style jsx global>{`
	  body {
		font-family: sans-serif;
	  }
	`}</style>
  );
}

function Title({ children }) {
  return (
    <React.Fragment>
      <h1>{children}</h1>
      <style jsx>{`
	  h1 {
		color: red;
	}		
	`}</style>
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <div>
	  
      <Title>Alura Cases - Home</Title>
      <Link href="/faq">Ir para a página do FAQ</Link>
    </div>
  );
}
