import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import Navbar from "./Navbar";

jest.mock("shared/lib", () => ({
    classNames: (
        cls: string,
        mods: Record<string, any> = {},
        additional: Array<string | undefined> = []
    ) => {
        const modClasses = Object.entries(mods)
            .filter(([, v]) => Boolean(v))
            .map(([k]) => k);

        return [cls, ...additional.filter(Boolean), ...modClasses].join(" ");
    },
}));

jest.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

jest.mock("shared/ui", () => ({
    __esModule: true,
    ButtonTheme: {
        CLEAR_INVERTED: "CLEAR_INVERTED",
    },
    Button: ({ children, onClick, type = "button" }: any) => (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    ),
    Modal: ({ isOpen, onClose }: any) =>
        isOpen ? (
            <div data-testid="modal">
                <button type="button" onClick={onClose}>
                    close
                </button>
            </div>
        ) : null,
}));

describe("Navbar", () => {
    test("renders Login button", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });

    test("opens modal on Login click and closes on next click", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Login" }));
        expect(screen.getByTestId("modal")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Login" }));
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    });

    test("applies passed className to root element", () => {
        const { container } = render(
            <MemoryRouter>
                <Navbar className="customClass" />
            </MemoryRouter>
        );

        expect(container.firstElementChild).toHaveClass("customClass");
    });
});
