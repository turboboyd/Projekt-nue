import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("shared/lib", () => ({
    classNames: (...args: any[]) => args.filter(Boolean).join(" "),
}));

let mockLang = "en";
const mockChangeLanguage = jest.fn();

jest.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: {
            get language() {
                return mockLang;
            },
            changeLanguage: mockChangeLanguage,
        },
    }),
}));

import LanguagesSwitcher from "./LanguagesSwitcher";

describe("LanguagesSwitcher", () => {
    beforeEach(() => {
        mockLang = "en";
        mockChangeLanguage.mockClear();
    });

    test("renders 3 language buttons", () => {
        render(<LanguagesSwitcher />);

        expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "DE" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "RU" })).toBeInTheDocument();
    });

    test("does not call changeLanguage when clicking current language", () => {
        render(<LanguagesSwitcher />);

        fireEvent.click(screen.getByRole("button", { name: "EN" }));
        expect(mockChangeLanguage).not.toHaveBeenCalled();
    });

    test("calls changeLanguage when clicking another language", () => {
        render(<LanguagesSwitcher />);

        fireEvent.click(screen.getByRole("button", { name: "DE" }));
        expect(mockChangeLanguage).toHaveBeenCalledWith("de");
    });

    test("handles region languages like 'de-DE' and treats it as 'de'", () => {
        mockLang = "de-DE";
        render(<LanguagesSwitcher />);

        fireEvent.click(screen.getByRole("button", { name: "DE" }));
        expect(mockChangeLanguage).not.toHaveBeenCalled();

        fireEvent.click(screen.getByRole("button", { name: "EN" }));
        expect(mockChangeLanguage).toHaveBeenCalledWith("en");
    });
});
