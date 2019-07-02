import { Title, BlueTitle } from '../components/Title';

export default () => (
  <>
    <Title>{process.env.WELCOME_MESSAGE}</Title>
    <BlueTitle>{process.env.WELCOME_MESSAGE}</BlueTitle>
  </>
);
