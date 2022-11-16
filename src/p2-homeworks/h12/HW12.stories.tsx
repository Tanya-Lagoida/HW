import HW12 from './HW12';
import { Provider } from 'react-redux';
import { store } from '../h10/bll/store';

export default {
  title: 'HW12',
  component: HW12
}

export const HW12Example = () => {
  return <Provider store={store} >
    <HW12 />
  </Provider>

}