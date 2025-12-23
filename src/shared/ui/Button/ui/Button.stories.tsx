import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme, ButtonSize } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// ---------- BASIC ----------

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const clearInverted = Template.bind({});
clearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

// ---------- BACKGROUND ----------

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

// ---------- SIZES ----------

export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Text',
    size: ButtonSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Text',
    size: ButtonSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Text',
    size: ButtonSize.XL,
};

// ---------- SQUARE-SIZES ----------

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    square: true,
    size: ButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    square: true,
    size: ButtonSize.XL,
};
