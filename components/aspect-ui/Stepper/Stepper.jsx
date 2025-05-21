"use client";
import React, { createContext, useContext, useState } from "react";

const StepperContext = createContext(undefined);

const Stepper = ({ children, initialStep = 0 }) => {
	const [activeStep, setActiveStep] = useState(initialStep);

	const contextValue = {
		activeStep,
		setActiveStep,
		totalSteps: React.Children.count(children),
	};

	return (
		<StepperContext.Provider value={contextValue}>
			<div className="flex items-center">
				{React.Children.map(children, (child, index) => (
					<React.Fragment key={index}>
						{index > 0 && (
							<div
								className={`mx-2 h-0.5 grow ${
									index <= activeStep ? "bg-blue-500" : "bg-gray-300"
								}`}
							/>
						)}
						{React.cloneElement(child, {
							...child.props,
							index,
						})}
					</React.Fragment>
				))}
			</div>
		</StepperContext.Provider>
	);
};

const StepperItem = ({ icon, label, children, index }) => {
	const context = useContext(StepperContext);
	if (!context) {
		throw new Error("StepperItem must be used within a Stepper");
	}

	const { activeStep, setActiveStep } = context;
	const completed = index !== undefined && index < activeStep;
	const active = index === activeStep;

	const getStateStyles = () => {
		if (completed) return "bg-blue-500 text-white";
		if (active) return "border-blue-500 text-blue-500";
		return "bg-white border-gray-300 text-gray-500";
	};

	const handleClick = () => {
		if (index !== undefined) {
			setActiveStep(index);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<div
				className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${getStateStyles()} cursor-pointer`}
				onClick={handleClick}>
				{completed ? "✓" : icon}
			</div>
			<p className={`mt-2 text-sm ${active ? "font-medium" : "text-gray-500"}`}>
				{label}
			</p>
			{children && <div className="mt-2">{children}</div>}
		</div>
	);
};

const useStepper = () => {
	const context = useContext(StepperContext);
	if (!context) {
		throw new Error("useStepper must be used within a Stepper");
	}
	return context;
};

export { Stepper, StepperItem, useStepper };

