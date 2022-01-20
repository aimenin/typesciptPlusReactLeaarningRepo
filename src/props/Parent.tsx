import { ChildasFc } from './Child';

const Parent = () => {
  return <ChildasFc color="grey" onClick={() => console.log('Clicked')}>Auf</ChildasFc>
}

export default Parent;