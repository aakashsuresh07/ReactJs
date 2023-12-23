import ArrowFunction from "./Component/ArrowFunction.js";
import DeleteAxios from "./Component/D 11/DeleteAxios.js";
import GetAxios from "./Component/D 11/GetAxios.js";
import Hooks from "./Component/D 11/Hooks.js";
import PostAxios from "./Component/D 11/PostAxios.js";
import PutAxios from "./Component/D 11/PutAxios.js";
import List from "./Component/Day 6/List.js";
import FunctionalCom from "./Component/FunctionalComponent.js";
import OneExport from "./Component/OneExport.js";
import ArrowProps from "./Day4 Props/ArrowProps.js";
import DefaultProps from "./Day4 Props/DefaultProps.js";
import DynamicRendering from "./Day4 Props/DynamicRendering.js";
import Parent from "./Day4 Props/ParentChildCommunication.js";
import PropsClass from "./Day4 Props/PropsClass.js";
import PropsFunctional from "./Day4 Props/PropsFunctional.js";
import PropsFunctionalEx1 from "./Day4 Props/PropsFunctionalEx1.js";
import StateClassComp from "./Day4 Props/StateClassComp.js";
import StateFunction from "./Day4 Props/StateFunction.js";
import StateHoldObject from "./Day4 Props/StateHoldObject.js";
import StateHold from "./Day4 Props/StateHoldObject.js";
import TwoWayBinding from "./Day4 Props/TwoWayBinding.js";

export default function App() {
  return(
    <div>
      <FunctionalCom />
      <OneExport />
      <ArrowFunction />
      <PropsFunctional name = "Aakash" />
      <PropsClass college = "SKCT" />
      <PropsFunctionalEx1 college = "SKCT" place = "CBE" />
      <ArrowProps place = "Salem" />
      <StateClassComp />
      <StateFunction />
      <StateHoldObject />
      <Parent />
      <DynamicRendering />
      <TwoWayBinding />
      <DefaultProps name = "Hello" />
      <List />
      <GetAxios />
      <PostAxios />
      <PutAxios />
      <DeleteAxios />
      <Hooks />
    </div>
  )
}