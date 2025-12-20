import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import LanguagesSwitcher from './LanguagesSwitcher';

export default {
    title: 'widget/LanguagesSwitcher',
    component: LanguagesSwitcher,
} as ComponentMeta<typeof LanguagesSwitcher>;

const Template: ComponentStory<typeof LanguagesSwitcher> = (args) => (
    <LanguagesSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
