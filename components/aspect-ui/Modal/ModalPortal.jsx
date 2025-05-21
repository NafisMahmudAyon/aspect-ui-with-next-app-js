"use client";
import ReactFocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { Portal } from "../utils/Portal";
import { useModal } from "./ModalContext";
import { ModalOverlay } from "./ModalOverlay";

export const ModalPortal = ({ children, className }) => {
	const { isOpen } = useModal();
	return (
		<Portal>
			<RemoveScroll enabled={isOpen}>
				<ReactFocusLock disabled={!isOpen} returnFocus>
					<ModalOverlay className={className}>{children}</ModalOverlay>
				</ReactFocusLock>
			</RemoveScroll>
		</Portal>
	);
};
