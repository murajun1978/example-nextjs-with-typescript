import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from './Title';
import { BlueTitle } from './BlueTitle';

const stories = storiesOf('Button', module);

stories.add('Default', () => <Title>Title</Title>);
stories.add('Blue Title', () => <BlueTitle>Title</BlueTitle>);
