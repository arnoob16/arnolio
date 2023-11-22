import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import CanonEvent from "../../components/canon-event";

interface Props {
	timelineTitle: string;
	timelineItems: {
		what: string[];
		when: string;
		where: string;
	}[];
}

const Timeline: React.FC<Props> = ({ timelineItems, timelineTitle }) => {
	return (
		<section className="timeline">
			<div className="title-wrapper">
				<div className="icon-box">
					<VerifiedIcon />
				</div>

				<h3 className="h3">{timelineTitle}</h3>
			</div>

			<ol className="timeline-list">
				{timelineItems.map((timelineItem, index) => (
					<CanonEvent
						key={index}
						what={timelineItem.what}
						when={timelineItem.when}
						where={timelineItem.where}
					/>
				))}
			</ol>
		</section>
	);
};

export default Timeline;
