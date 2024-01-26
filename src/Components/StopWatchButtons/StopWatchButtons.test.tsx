//Please use npx jest to execute tests

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./stopwatch.css";
import StopWatchButton from "./StopWatchButton";

//Test to Check For the start button and functionality
test("render start button with label", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="Start" onClick={onClickTest} />
  );

  const button = getByText("Start");
  expect(button).toBeInTheDocument();
});

test("calls onClick when start button is clicked", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="Start" onClick={onClickTest} />
  );

  const button = getByText("Start");
  fireEvent.click(button);

  expect(onClickTest).toHaveBeenCalled();
});

//Test to Check For the stop button and functionality
test("render stop button with label", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="Stop" onClick={onClickTest} />
  );

  const button = getByText("Stop");
  expect(button).toBeInTheDocument();
});

test("calls onClick when stop button is clicked", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="Stop" onClick={onClickTest} />
  );

  const button = getByText("Stop");
  fireEvent.click(button);

  expect(onClickTest).toHaveBeenCalled();
});

//Test to Check For the reset button and functionality
test("render reset button with label", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="Reset" onClick={onClickTest} />
  );

  const button = getByText("Reset");
  expect(button).toBeInTheDocument();
});

test("calls onClick when reset button is clicked", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="reset" onClick={onClickTest} />
  );

  const button = getByText("reset");
  fireEvent.click(button);

  expect(onClickTest).toHaveBeenCalled();
});

//Test to Check For the lap button and functionality

test("render lap button with label", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="Lap" onClick={onClickTest} />
  );

  const button = getByText("Lap");
  expect(button).toBeInTheDocument();
});

test("calls onClick when lap button is clicked", () => {
  const onClickTest = jest.fn();
  const { getByText } = render(
    <StopWatchButton label="Lap" onClick={onClickTest} />
  );

  const button = getByText("Lap");
  fireEvent.click(button);

  expect(onClickTest).toHaveBeenCalled();
});
