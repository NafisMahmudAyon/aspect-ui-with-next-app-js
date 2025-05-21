import {
	Accordion,
	AccordionContent,
	AccordionHeader,
	AccordionItem,
} from "../Accordion";
import { Skeleton } from "../Skeleton";

const AccordionExample = () => {
	return (
		<div className="w-full">
			<Accordion activeItem={["1"]}>
				<AccordionItem id="1">
					<AccordionHeader>
						<Skeleton
							variation="text"
							width="80%"
							className="bg-gray-400 dark:bg-gray-500"
						/>
					</AccordionHeader>
					<AccordionContent>
						<Skeleton
							variation="text"
							width="90%"
							className="mb-2.5 bg-gray-400 dark:bg-gray-500"
						/>
						<Skeleton
							variation="text"
							width="80%"
							className="mb-2.5 bg-gray-400 dark:bg-gray-500"
						/>
						<Skeleton
							variation="text"
							width="60%"
							className="mb-2.5 bg-gray-400 dark:bg-gray-500"
						/>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem id="2">
					<AccordionHeader>
						<Skeleton
							variation="text"
							width="85%"
							className="bg-gray-400 dark:bg-gray-500"
						/>
					</AccordionHeader>
					<AccordionContent>
						<Skeleton
							variation="text"
							width="90%"
							className="mb-2.5 bg-gray-400 dark:bg-gray-500"
						/>
						<Skeleton
							variation="text"
							width="80%"
							className="mb-2.5 bg-gray-400 dark:bg-gray-500"
						/>
						<Skeleton
							variation="text"
							width="60%"
							className="mb-2.5 bg-gray-400 dark:bg-gray-500"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default AccordionExample;
