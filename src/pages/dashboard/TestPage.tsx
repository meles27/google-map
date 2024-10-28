import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Button } from "@material-tailwind/react";
import { decrement, increment } from "../../slices/counterSlice";
import withAnimation from "../../components/route-animation/withAnimation";

const Child = (props: { children: React.ReactNode }) => {
  // const counter = useSelector((state: RootState) => state.counter.value);
  useEffect(() => {
    console.log("child rendered");
  });
  return (
    <div className="felx flex-col gap-md">
      this the child, <span></span>
      <span>{props.children}</span>
    </div>
  );
};
const GrandChild: React.FC<{ counter: number; children: React.ReactNode }> = (
  props
) => {
  useEffect(() => {
    console.log("grandchild rendered");
  });
  return (
    <div className="flex flex-col">
      this the GrandChild, {props.counter}
      <span>hear is the last element {props.children}</span>
    </div>
  );
};

const LastComponent: React.FC = () => {
  useEffect(() => {
    console.log("this is from the last component.");
  });
  return (
    <section className="flex">
      this is the last component for this test.
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const TestPage: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Test Page</h1>
      <section className="flex">
        <Button onClick={() => dispatch(increment())}>increase</Button>
        <Button onClick={() => dispatch(decrement())}>decrease</Button>
      </section>
      <Child>
        <GrandChild counter={counter}>
          <LastComponent />
        </GrandChild>
      </Child>
    </div>
  );
};

export default withAnimation(TestPage);
