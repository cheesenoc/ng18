import type { Meta, StoryObj } from '@storybook/angular';
import { NavBarComponent } from './mat-nav-bar.component';
 
const meta: Meta<NavBarComponent> = {
  title: 'MatExample/MatNavBar',
  component: NavBarComponent,
};
 
export default meta;
type Story = StoryObj<NavBarComponent>;
 
export const Default: Story = {
  args: {
    pageTitle: 'Example Title',
    buttonTitle: 'My Button',
    icon: 'home',
  },
};