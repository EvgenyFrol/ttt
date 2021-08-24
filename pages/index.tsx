import React from "react";
import Wrap from "../components/Wrap";
import { Provider  } from 'react-redux'
import store from '../store'

const Page:React.FC = () => (
  <Provider store={store}>
    <Wrap />
  </Provider>
)

export default Page;