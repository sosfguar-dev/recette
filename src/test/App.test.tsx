// src/__ tests __/App.test.tsx
import { render, screen } from "@testing-library/react"
import App from "../App"
import '@testing-library/jest-dom'

describe ("<App />", () => {
    test ("Validate contains the word", () => {
        render(<App />);

        const word = screen.getByText("Recette");
        expect(word).toBeInTheDocument;
    });
});